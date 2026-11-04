
import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h1>Contact Me</h1>

      <p>Let's work together on your next project!</p>

      <form>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>

    </section>
  );
}

export default Contact;
