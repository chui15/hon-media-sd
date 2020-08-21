import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoPNG from '../../images/HonLogo3.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-3xl">
        <AnchorLink className="-ml-0.5" href="#top">
          <img
            className="mx-auto"
            src={LogoPNG}
            alt="logo"
            style={{ height: '40px', width: '60px' }}
          />
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-black hover:text-button" href="#about">
          About Us
        </AnchorLink>
        <AnchorLink className="px-4 text-black hover:text-button" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4 text-black hover:text-button" href="#testimonials">
          Clients
        </AnchorLink>
        <AnchorLink className="px-4 text-black hover:text-button" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
