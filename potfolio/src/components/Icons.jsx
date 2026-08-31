
const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: '1em',
  height: '1em',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function FiArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <line x1='5' y1='12' x2='19' y2='12' />
      <polyline points='12 5 19 12 12 19' />
    </svg>
  );
}

export function FiExternalLink(props) {
  return (
    <svg {...base} {...props}>
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
      <polyline points='15 3 21 3 21 9' />
      <line x1='10' y1='14' x2='21' y2='3' />
    </svg>
  );
}

export function FiGithub(props) {
  return (
    <svg {...base} {...props}>
      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
    </svg>
  );
}

export function FiMousePointer(props) {
  return (
    <svg {...base} {...props}>
      <path d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z' />
      <path d='M13 13l6 6' />
    </svg>
  );
}

export function FiVolume2(props) {
  return (
    <svg {...base} {...props}>
      <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
      <path d='M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07' />
    </svg>
  );
}

export function FiVolumeX(props) {
  return (
    <svg {...base} {...props}>
      <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
      <line x1='23' y1='9' x2='17' y2='15' />
      <line x1='17' y1='9' x2='23' y2='15' />
    </svg>
  );
}
