import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section
    id={id}
    className="py-20"
    data-sal="slide-up"
    data-sal-delay="100"
    data-sal-easing="ease"
  >
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className="lg:w-1/2">{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-10 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
