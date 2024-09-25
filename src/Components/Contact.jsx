import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState } from "react";
// import "./Form.css"; // Importing the CSS file for the form

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log(formData);
//   };
// };

function Contact() {
  return (
    <div className="main-contact-div">
      <div className="right-main-contact-div">
        <div>
          <div className="connect">
            <h1>Let's connect</h1>
          </div>
          <div>
            <p>
              say Hello Or arrange the meeting leave your Messege i wil reply
              fast ASAP
            </p>
          </div>
          <div className="anchors">
            <a className="linkedin" href="">
              <FaLinkedinIn />
            </a>
            <a className="github" href="">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>@2024 Muhammad yasin Ali</div>
      </div>
      <div className="form-container">
        <form className="contact-form">
          <div className="form-group ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
