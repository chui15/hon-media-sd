import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-30 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <i className="fa fa-instagram" aria-hidden="true" />
          <li>
            <a href="https://www.instagram.com/honmediasd/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/65747941/admin/">Linkedin</a>
          </li>
          <li>
            <a href="https://www.facebook.com/HonMediaSD/">Facebook</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="mt-5">HonMediaSD@gmail.com</p>
        <p className="mt-5">San Diego, CA</p>
      </div>
    </div>
    <div className="flex text-center mt-8">&copy; HON Media SD 2020.</div>
  </footer>
);

export default Footer;
