"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // smoothness (0–1, lower = smoother/slower)
        duration: 1.2, // used if lerp is not set
        smoothWheel: true,
        autoRaf: true, // runs requestAnimationFrame for you
        anchors: {
          offset: -100, // accounts for your fixed navbar (h-25 ≈ 100px)
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}
