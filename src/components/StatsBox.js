import React from 'react';

const StatsBox = ({ image, secondaryText, linkedin }) => (
  <>
    <a href={linkedin} target="_blank" rel="noopener noreferrer">
      <img className="rounded-lg flex items-center mb-4 mx-auto" src={image} alt="member" />
      <p className="font-semibold text-black mx-auto px-4 text-lg">{secondaryText}</p>
    </a>
  </>
);

export default StatsBox;
