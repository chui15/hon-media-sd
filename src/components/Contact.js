/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Button from './Button';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.Contact = React.createRef();
    this.state = { feedbackMsg: null }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.encode = this.encode.bind(this);
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = this.Contact.current

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(response => {
        console.log("====================================")
        console.log(`${JSON.stringify(response, null, 2)}`)
        console.log("====================================")
        this.Contact.current.reset()
      })
      .catch(error => {
        console.log("====================================")
        console.log(`error in submiting the form data:${error}`)
        console.log("====================================")
      })
  }

  render() {
    return (
      <>
        <form
          name="contact"
          method="POST"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          ref={this.Contact}
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p className="mt-8 text-xl font-light">
            <label className="text-gray-700 text-lg font-bold mb-2" htmlFor="name">
              Your Name
              <br />
              <input
                className="appearance-none border-2 mt-3 rounded w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="First and Last Name"
              />
            </label>
          </p>
          <p className="mt-8 text-xl font-light">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Your Email
              <br />
              <input
                className="appearance-none border-2 mt-3 rounded w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="i.e. johndoe123@gmail.com"
              />
            </label>
          </p>
          <p className="mt-8 text-xl font-light">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
              Message
              <br />
              <textarea
                className="appearance-none border-2 mt-3 rounded max-h-full w-3/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="message"
                onChange={this.handleChange}
                rows="8"
                placeholder="Your message here"
                required
              />
            </label>
          </p>
          <p className="mt-8 text-xl font-light">
            <Button>
              Send
            </Button>
          </p>
        </form>
      </>
    );
  }
}
export default Contact;
