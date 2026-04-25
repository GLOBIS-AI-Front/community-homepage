"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** ビューポート進入と判定する表示割合 (0.0〜1.0)。デフォルト 0.12 */
  threshold?: number;
  /** ビューポート進入から発火までの遅延 (ms)。デフォルト 0 */
  delay?: number;
}

/**
 * 子要素をスクロール連動でフェード+スライドインさせる薄いラッパー。
 * 一度表示されたら以降はアニメーション無しで通常表示のまま固定する。
 */
export default function Reveal({
  children,
  threshold = 0.12,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
