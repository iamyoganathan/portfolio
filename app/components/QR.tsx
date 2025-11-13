"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QR({ value }: { value: string }) {
  if (!value) {
    return null;
  }

  return (
    <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-4">
      <QRCodeCanvas
        value={value}
        size={168}
        bgColor="rgba(7,16,33,0.9)"
        fgColor="#d1fae5"
        includeMargin
      />
    </div>
  );
}
