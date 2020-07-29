/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { navigate } from 'gatsby-link';
import Button from './Button';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p className="mt-8 text-xl font-light">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
            Your name:
            <br />
            <input
              className="appearance-none border-2 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="First and Last Name"
            />
          </label>
        </p>
        <p className="mt-8 text-xl font-light">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
            Your email:
            <br />
            <input
              className="appearance-none border-2 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="i.e. johndoe123@gmail.com"
            />
          </label>
        </p>
        <p className="mt-8 text-xl font-light">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
            Message:
            <br />
            <textarea
              className="appearance-none border-2 rounded max-h-full w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="message"
              onChange={handleChange}
              placeholder="Your message here"
            />
          </label>
        </p>
        <p className="mt-8 text-xl font-light">
          <Button size="lg" type="submit">
            Send
          </Button>
        </p>
      </form>
    </>
  );
}
