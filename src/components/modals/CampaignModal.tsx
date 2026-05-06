"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "republic_day_campaign_seen_v1";

export default function CampaignModal() {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch (e) {
      // ignore
      setVisible(true);
    }
  }, []);

  function close() {
    if (dontShow) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch (e) {
        // ignore
      }
    }
    setVisible(false);
  }

  return null; // Deactivated by user request

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <div className="relative z-10 max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-neutral-900">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Republic Day — Free MVP program</h3>
            <p className="mt-2 text-sm text-[#374151] dark:text-neutral-300">We’re building 5 startup MVPs free of development costs during Jan 25–31. Winners pay domain & deployment only. Apply now — limited spots.</p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link href="/campaigns/republic-day-2026" className="inline-flex items-center rounded-md bg-[#3d52a0] px-4 py-2 text-sm font-semibold text-white">Apply for Free MVP</Link>
              <button onClick={() => { window.location.href = '/campaigns/republic-day-2026#eligibility' }} className="inline-flex items-center rounded-md border px-4 py-2 text-sm">See eligibility</button>
            </div>

            <label className="mt-4 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} />
              Don’t show this again
            </label>
          </div>

          <div className="hidden w-28 shrink-0 sm:block">
            <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-[#3d52a0] to-[#7091e6]" />
          </div>
        </div>

        <button onClick={close} aria-label="Close" className="absolute right-3 top-3 text-sm text-[#6b7280]">Close</button>
      </div>
    </div>
  );
}
