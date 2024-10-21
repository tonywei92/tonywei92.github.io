"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function BackgroundAnimation() {
  return (
    <div className="fixed left-0 right-0 min-h-screen z-0 opacity-30 dark:opacity-50 flex items-center justify-center">
      <DotLottieReact className="" src="/animation.json" loop autoplay />
    </div>
  );
}
