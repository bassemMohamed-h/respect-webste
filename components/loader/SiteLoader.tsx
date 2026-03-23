"use client";

export default function SiteLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="mb-4 text-2xl font-semibold">Loading</div>
        <div className="h-1 w-40 overflow-hidden rounded bg-white/20">
          <div className="loader-bar h-full w-1/2 bg-white" />
        </div>
      </div>
    </div>
  );
}