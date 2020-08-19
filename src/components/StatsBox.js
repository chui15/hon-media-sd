import React from 'react';

const StatsBox = ({ image, secondaryText }) => (
  <>
    <img className="rounded-full flex items-center pb-5 mx-auto" src={image} alt="member" />
    <p className="font-semibold mx-auto px-4 text-lg">{secondaryText}</p>
  </>
);

export default StatsBox;
