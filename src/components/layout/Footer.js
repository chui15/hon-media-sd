import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-16 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-2xl font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <i className="fa fa-instagram" aria-hidden="true" />
          <li>
            <OutboundLink
              href="https://blog.hon-media.com"
              className="text-button hover:text-buttonHover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Blog
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://www.instagram.com/honmediasd/"
              className="text-button hover:text-buttonHover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://www.linkedin.com/company/65747941/admin/"
              className="text-button hover:text-buttonHover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://www.facebook.com/HonMediaSD/"
              className="text-button hover:text-buttonHover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </OutboundLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-5">HonMediaSD@gmail.com</p>
        <p className="mt-5">San Diego, CA</p>
      </div>
    </div>
    <div className="flex text-center mt-8">&copy; Hon Media 2020</div>
  </footer>
);

export default Footer;
