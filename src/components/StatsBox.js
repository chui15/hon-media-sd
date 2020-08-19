import React from 'react';

const StatsBox = ({ image, secondaryText }) => (
  <>
    <img className="rounded-lg flex items-center mb-4 mx-auto" src={image} alt="member" />
    <p className="font-semibold mx-auto px-4 text-lg">{secondaryText}</p>
  </>
);

export default StatsBox;
