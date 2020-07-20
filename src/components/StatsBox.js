import React from 'react';

const StatsBox = ({ image, secondaryText }) => (
  <>
    <img className="ml-20 rounded-full pb-5" src={image} alt="member" />
    <p className="font-semibold mb-6 text-lg">{secondaryText}</p>
  </>
);

export default StatsBox;
