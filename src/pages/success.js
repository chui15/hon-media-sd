import React from 'react';
import SplitSection from '../components/SplitSection';
import Success from '../svg/Success';

export default () => (
  <SplitSection
    primarySlot={
      <div className="lg:pr-32 xl:pr-48">
        <h3 className="text-3xl font-semibold leading-tight">Thanks for contacting us!</h3>
        <h3 className="text-2xl font-semibold leading-tight my-12">
          We&apos;ll make sure to get back to you as soon as possible.
        </h3>
        <a
          href="https://hon-media.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold pt-12"
        >
          Back to Hon Media SD
        </a>
      </div>
    }
    secondarySlot={<Success />}
  />
);
