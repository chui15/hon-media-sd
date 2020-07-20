import * as React from 'react';

function Bulb(props) {
  return (
    <svg
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-bulb"
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#673AB7"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 116 0 3.5 3.5 0 00-1 3 2 2 0 01-4 0 3.5 3.5 0 00-1-3M9.7 17h4.6" />
    </svg>
  );
}

const MemoBulb = React.memo(Bulb);
export default MemoBulb;
