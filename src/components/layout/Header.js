import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import LogoIcon from '../../svg/HonLogo';
import LogoPNG from '../../images/HonLogo.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <AnchorLink className="w-12 ml-5" href="#top">
          <img className="mx-auto h-full w-full" src={LogoPNG} alt="logo" />
        </AnchorLink>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-black hover:text-purple-700" href="#about">
          About Us
        </AnchorLink>
        <AnchorLink className="px-4 text-black hover:text-purple-700" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4 text-black hover:text-purple-700" href="#testimonials">
          Clients
        </AnchorLink>
        <AnchorLink className="px-4 text-black hover:text-purple-700" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
