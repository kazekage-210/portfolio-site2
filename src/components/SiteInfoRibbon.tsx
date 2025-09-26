import React from "react";

export default function SiteInfoRibbon() {
  return (
    <div
      aria-label="Site information ribbon"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[9999]"
    >
      <div className="pointer-events-auto mx-auto max-w-screen-xl px-3 pb-3">
        <div className="rounded-md glass text-foreground/90 text-xs sm:text-sm px-3 py-2 shadow-lg">
          <strong className="mr-2">🚧 Demo</strong>
          このサイトは<strong>個人の学習・検証を目的とした非商用の実験用デモ</strong>です。
        </div>
      </div>
    </div>
  );
}
