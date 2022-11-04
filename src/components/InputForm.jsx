import React from "react";

const InputForm = () => {
  const name = "Solomon";

  return (
    <section id="Form">
      <form className="container">
        <div className="form-heading">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className="name-input">
          <div className="first-name">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          {/*  */}
          <div className="last-name">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div className="message-input">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div className="check-field">
          <input type="checkbox" id="checkbox" />
          <p>You agree to providing your data to {name} who may contact you.</p>
        </div>
        <button type="submit" id="btn__submit">
          Send message
        </button>
      </form>
    </section>
  );
};

export default InputForm;
