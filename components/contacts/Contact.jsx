import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [typedText, setTypedText] = useState("");
  const message = "Feel free to reach out to me using the form below!";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      setTypedText((prev) => prev + message[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 50);

    if (charIndex >= message.length) {
      clearInterval(typingEffect);
    }

    return () => clearInterval(typingEffect);
  }, [charIndex, message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>
          Contact <span>Me</span>
        </h2>
        <p>{typedText}</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
