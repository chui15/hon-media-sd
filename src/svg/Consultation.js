import * as React from 'react';

function Consultation(props) {
  return (
    <svg height="1em" viewBox="0 0 512 512" width="1em" {...props}>
      <path d="M360 56h128v104H360z" fill="#fcde96" />
      <path
        d="M436 120h-4v-2.158A15.98 15.98 0 00440 104v-8a16 16 0 00-32 0v8a15.98 15.98 0 008 13.842V120h-4a20 20 0 00-20 20v20h64v-20a20 20 0 00-20-20z"
        fill="#fffefb"
      />
      <path d="M40 464V234a10 10 0 0110-10h412a10 10 0 0110 10v230z" fill="#b3e9ff" />
      <path
        d="M468 488H44a20 20 0 01-20-20v-20h152l16 8h128l16-8h152v20a20 20 0 01-20 20z"
        fill="#25b1fa"
      />
      <path d="M80 200h352v216H80z" fill="#f2fbff" />
      <path
        d="M168 384v-26.14a20 20 0 0112.978-18.727L232 320h48l51.022 19.133A20 20 0 01344 357.86V384z"
        fill="#fac850"
      />
      <path d="M272 280h-32l-8 40 24 16 24-16z" fill="#ffd4cf" />
      <path
        d="M272 280h-32l-4.475 22.375 1.953 1.171a36 36 0 0037.044 0l1.953-1.172z"
        fill="#fbb8b0"
      />
      <path
        d="M286.29 277.826l-20 12a20 20 0 01-20.58 0l-20-12a20 20 0 01-9.71-17.15V192h80v68.676a20 20 0 01-9.71 17.15z"
        fill="#ffd4cf"
      />
      <path d="M264 160h10a30 30 0 0130 30v18h-40v-48z" fill="#d32a20" />
      <path d="M230 160h42v34a30 30 0 01-30 30h-42v-34a30 30 0 0130-30z" fill="#fa5d3f" />
      <g fill="#fcde96">
        <path d="M336 232h64v64h-64zM177.14 284.116L155.471 248H104v-16h56a8 8 0 016.86 3.884l24 40z" />
        <path d="M104 264h48v16h-48z" />
      </g>
      <g>
        <path d="M192 24h128v104H192z" fill="#fcde96" />
        <path
          d="M268 88h-4v-2.158A15.98 15.98 0 00272 72v-8a16 16 0 00-32 0v8a15.98 15.98 0 008 13.842V88h-4a20 20 0 00-20 20v20h64v-20a20 20 0 00-20-20z"
          fill="#fffefb"
        />
      </g>
      <path d="M24 56h128v104H24z" fill="#fcde96" />
      <path
        d="M100 120h-4v-2.158A15.98 15.98 0 00104 104v-8a16 16 0 00-32 0v8a15.98 15.98 0 008 13.842V120h-4a20 20 0 00-20 20v20h64v-20a20 20 0 00-20-20z"
        fill="#fffefb"
      />
      <path d="M120 376h272v16H120z" fill="#fcde96" />
    </svg>
  );
}

const MemoConsultation = React.memo(Consultation);
export default MemoConsultation;
