"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionary, type Locale } from "@/utils/i18n/dictionary";

const STORAGE_KEY = "cogniv_locale";
const DEFAULT_LOCALE: Locale = "en";

// ── External locale store ────────────────────────────────────────────────────
// Manages the persisted locale value outside of React state.
// useSyncExternalStore reads this store and re-renders subscribers on change.

const localeListeners = new Set<() => void>();

function notifyLocaleListeners() {
  localeListeners.forEach((cb) => cb());
}

/** Read the current locale from localStorage (client only). */
function getLocaleSnapshot(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") return stored;
  } catch {
    // localStorage blocked; fall through to default.
  }
  return DEFAULT_LOCALE;
}

/** Server snapshot — always EN to guarantee hydration safety. */
function getLocaleServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

/** Subscribe to locale changes, including cross-tab storage events. */
function subscribeToLocale(callback: () => void): () => void {
  localeListeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    localeListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

/** Write locale to localStorage and notify all in-tab subscribers. */
function writeLocale(l: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, l);
  } catch {
    // Silently ignore storage errors.
  }
  notifyLocaleListeners();
}

// ── Context ──────────────────────────────────────────────────────────────────

interface LanguageContextValue {
  locale: Locale;
  t: (typeof dictionary)["en"];
  setLocale: (l: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Locale is derived entirely from the external store — no useState, no
  // synchronous setState inside an effect. Server snapshot = "en" ensures
  // hydration safety; client snapshot reads localStorage after hydration.
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot
  );

  const setLocale = useCallback((l: Locale) => {
    writeLocale(l);
  }, []);

  // Sync <html lang> attribute. Updating a DOM attribute is exactly the
  // kind of external-system synchronization effects are designed for.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionary[locale], setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used inside <LanguageProvider>");
  }
  return ctx;
}
