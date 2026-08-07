"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !cursorRef.current) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const handlePointerMove = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const handlePointerOver = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement)) return;
      const isInteractive = Boolean(event.target.closest("[data-cursor]"));
      cursor.classList.toggle("cursor-active", isInteractive);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
