'use client'

export default function GradientBG() {
  return (
    <div className="moving-gradient-hero">
      {/* Base gradient layer */}
      <div className="gradient-base"></div>

      {/* Edge wave layers - positioned around perimeter */}
      <div className="wave-layer wave-1"></div>
      <div className="wave-layer wave-2"></div>
      <div className="wave-layer wave-3"></div>
      <div className="wave-layer wave-4"></div>
      <div className="wave-layer wave-5"></div>

      {/* Soft overlay for depth */}
      <div className="gradient-overlay"></div>
    </div>
  )
}
