"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const MQ = "(prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getSnapshot = () => window.matchMedia(MQ).matches;
const getServerSnapshot = () => false;

export default function FadeInUpWrapper({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  // Subscribe to the prefers-reduced-motion media query as external state.
  // useSyncExternalStore is the React-idiomatic way to read browser APIs —
  // no setState inside any effect.
  const prefersReduced = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const [observerVisible, setObserverVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced) return; // no observer needed; visibility derived below
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObserverVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReduced]);

  // Derive visible state: always visible when reduced motion is preferred,
  // otherwise driven by the IntersectionObserver callback (async, not sync).
  const isVisible = prefersReduced || observerVisible;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
