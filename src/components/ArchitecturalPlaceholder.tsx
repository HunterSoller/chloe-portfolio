"use client";

export function ArchitecturalPlaceholder({
  className = "",
  tone = "taupe",
}: {
  className?: string;
  tone?: "taupe" | "cream";
}) {
  const bg = tone === "taupe" ? "bg-[#EFE7D3]" : "bg-[color:var(--surface)]";
  const stroke = "rgba(17,17,17,0.22)";

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] ring-1 ring-[color:var(--line)] ${bg} ${className}`}
    >
      <svg
        viewBox="0 0 900 560"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(17,17,17,0.07)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="900" height="560" fill="url(#grid)" />

        {/* plan/section-like geometry */}
        <path
          d="M140 410 L140 170 L330 170 L330 220 L520 220 L520 150 L720 150 L720 410 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
        />
        <path
          d="M180 370 L180 210 L290 210"
          fill="none"
          stroke="rgba(17,17,17,0.18)"
          strokeWidth="2"
        />
        <path
          d="M360 260 L480 260 L480 360 L360 360 Z"
          fill="none"
          stroke="rgba(17,17,17,0.18)"
          strokeWidth="2"
        />
        <path
          d="M560 190 L680 190 L680 300"
          fill="none"
          stroke="rgba(17,17,17,0.18)"
          strokeWidth="2"
        />

        {/* diagonal “section cut” */}
        <path
          d="M120 460 L780 120"
          fill="none"
          stroke="rgba(17,17,17,0.12)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_10%,rgba(255,255,255,0.45),transparent_60%)] opacity-70" />
    </div>
  );
}

