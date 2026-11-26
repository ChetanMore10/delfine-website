const iconPaths = {
  arrow: ['M5 12h14', 'm12 5 7 7-7 7'],
  arrowUpRight: ['M7 17 17 7', 'M7 7h10v10'],
  bank: ['M3 10h18', 'M5 10v9', 'M9 10v9', 'M15 10v9', 'M19 10v9', 'M3 21h18', 'm12 3 9 5H3z'],
  briefcase: ['M10 6V4h4v2', 'M3 8h18v12H3z', 'M3 12h18', 'M10 12v2h4v-2'],
  check: ['m5 12 4 4L19 6'],
  close: ['M18 6 6 18', 'm6 6 12 12'],
  code: ['m8 17-5-5 5-5', 'm16 7 5 5-5 5', 'm14 4-4 16'],
  compass: ['m16.2 7.8-2.6 6-5.8 2.4 2.5-5.8z', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'],
  cpu: ['M12 8v8', 'M8 12h8', 'M9 3v3', 'M15 3v3', 'M9 18v3', 'M15 18v3', 'M3 9h3', 'M3 15h3', 'M18 9h3', 'M18 15h3', 'M6 6h12v12H6z'],
  graduation: ['m2 10 10-5 10 5-10 5z', 'M6 12v5c3.5 3 8.5 3 12 0v-5', 'M22 10v6'],
  heart: ['M20.8 8.7c0 5.3-8.8 10.3-8.8 10.3S3.2 14 3.2 8.7a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2z'],
  layers: ['m12 3 9 5-9 5-9-5z', 'm3 12 9 5 9-5', 'm3 16 9 5 9-5'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  monitor: ['M3 4h18v13H3z', 'M8 21h8', 'M12 17v4'],
  phone: ['M7 3h10v18H7z', 'M11 18h2'],
  shopping: ['M3 4h2l2.4 11.5h11.8L22 8H6', 'M9 20h.01', 'M18 20h.01'],
  sparkles: ['m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z', 'm19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9z', 'm5 3 .7 1.3L7 5l-1.3.7L5 7l-.7-1.3L3 5l1.3-.7z'],
  support: ['M4 13v-2a8 8 0 0 1 16 0v2', 'M4 13H3v4h4v-4z', 'M20 13h1v4h-4v-4z', 'M12 21h4'],
  factory: ['M3 21V9l6 3V9l6 3V5h6v16z', 'M7 17h2', 'M13 17h2', 'M18 9h1'],
  globe: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M2 12h20', 'M12 2a15 15 0 0 1 0 20', 'M12 2a15 15 0 0 0 0 20'],
}

function Icon({ name, size = 22, className = '' }) {
  const paths = iconPaths[name] || iconPaths.sparkles

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths.map((path) => <path d={path} key={path} />)}
    </svg>
  )
}

export default Icon
