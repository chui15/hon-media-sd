import * as React from 'react';

function HonLogo(props) {
  return (
    <svg viewBox="0 0 865.92 554.85" {...props}>
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={320.06}
          y1={123.54}
          x2={575.92}
          y2={379.39}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff1d25" />
          <stop offset={1} stopColor="#00f" />
        </linearGradient>
        <style>
          {
            '.prefix__cls-1{font-size:500px;font-family:Righteous-Regular,Righteous;letter-spacing:-.09em}'
          }
        </style>
      </defs>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <text className="prefix__cls-1" transform="translate(0 426.43)">
            H
          </text>
          <text className="prefix__cls-1" transform="translate(253.4 425.05)">
            O
          </text>
          <path
            d="M628.89 251.46a177 177 0 01-6.47 48 184.69 184.69 0 01-18.18 43.21 179.49 179.49 0 01-28.32 36.74 184.78 184.78 0 01-36.63 28.45A179.24 179.24 0 01448 432.62a177 177 0 01-48-6.47 182.35 182.35 0 01-126.7-126.71 181.55 181.55 0 010-96.07 178.8 178.8 0 0118.31-43.21 184.06 184.06 0 0128.45-36.62 179.19 179.19 0 0136.74-28.33A184.69 184.69 0 01400 77a181.55 181.55 0 0196.07 0 180.66 180.66 0 01126.35 126.37 178.24 178.24 0 016.47 48.09zm-69.58 0a108.28 108.28 0 00-8.79-43.33 110.92 110.92 0 00-59.2-59.2 111.51 111.51 0 00-86.79 0 114.32 114.32 0 00-35.4 23.8 111.32 111.32 0 00-23.93 35.4 108.28 108.28 0 00-8.79 43.33 106.56 106.56 0 008.79 43.1 112.92 112.92 0 0059.33 59.2 111.51 111.51 0 0086.79 0 111.32 111.32 0 0035.4-23.93 114.62 114.62 0 0023.8-35.27 106.56 106.56 0 008.79-43.1z"
            fill="url(#prefix__linear-gradient)"
          />
          <text className="prefix__cls-1" transform="translate(553.42 426.1)">
            N
          </text>
        </g>
      </g>
    </svg>
  );
}

const MemoHonLogo = React.memo(HonLogo);
export default MemoHonLogo;
