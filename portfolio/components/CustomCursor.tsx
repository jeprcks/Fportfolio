"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !cursorRef.current) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    let frameId: number | null = null;
    let pointerX = 0;
    let pointerY = 0;

    const updateCursor = () => {
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      frameId = null;
    };

    const handlePointerMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateCursor);
      }
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
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
