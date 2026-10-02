// The one drawing on the site (DESIGN-SYSTEM.md, Illustration style): piped icing, as on her red
// birthday cake. Inline SVG, theme colours only, static, and decorative, so screen readers skip it.
// Layers, back to front: a crumb rope border with fine hatching; a cream piped wave in three line
// weights (6, 3 and 2) with a paler highlight beside the thickest line; small stars and dots.
// It has no letters. The wave repeats, so any width shows a good part of it.

const units = Array.from({ length: 10 }, (_, i) => i * 120)
const wave = `M0 40 ${units
  .map((x) => `C ${x + 30} 14, ${x + 60} 14, ${x + 60} 40 S ${x + 90} 66, ${x + 120} 40`)
  .join(' ')}`
const ropeCentres = Array.from({ length: 50 }, (_, i) => 12 + i * 24)
const star = 'M0 -6 L1.8 -1.8 L6 0 L1.8 1.8 L0 6 L-1.8 1.8 L-6 0 L-1.8 -1.8Z'

export default function PipedIcing() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 96"
      preserveAspectRatio="xMidYMax slice"
      className="block h-14 w-full md:h-24"
    >
      {ropeCentres.map((cx) => (
        <g key={cx} transform={`rotate(-18 ${cx} 84)`}>
          <ellipse cx={cx} cy={84} rx={13} ry={6.5} className="fill-crumb" />
          <path
            d={`M${cx - 8} 82 l10 5 M${cx - 4} 79 l10 5 M${cx - 12} 85 l8 4`}
            fill="none"
            strokeWidth={1.5}
            className="stroke-cake-red"
          />
        </g>
      ))}
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path d={wave} strokeWidth={6} />
        <path d={wave} strokeWidth={3} transform="translate(0 -11)" />
        <path d={wave} strokeWidth={2} transform="translate(0 11)" />
        <path d={wave} strokeWidth={2} strokeOpacity={0.6} transform="translate(-2.5 -2.5)" />
      </g>
      {units.map((x) => (
        <g key={x} fill="currentColor">
          <path d={star} transform={`translate(${x + 60} 9)`} />
          <circle cx={x + 90} cy={12} r={2.5} />
          <circle cx={x + 30} cy={70} r={2} />
        </g>
      ))}
    </svg>
  )
}
