import React from "react";

export default function NonCommercialNote() {
  return (
    <section
      aria-label="Non-commercial notice"
      className="mt-4 rounded-lg glass p-4 text-sm text-foreground/90"
    >
      <p className="font-medium">ご案内</p>
      <p className="mt-1">
        本サイトは<strong>個人の学習・検証目的</strong>の
        <strong>非商用デモ</strong>です。掲載内容は実験的なものとなります。
      </p>
    </section>
  );
}
