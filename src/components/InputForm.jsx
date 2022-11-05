import React, { useState } from "react";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);

  const name = "Solomon";

  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearValue();
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const clearValue = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

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
              value={firstName}
              placeholder="Enter your first name"
              required
              onChange={onChangeFirstName}
            />
          </div>
          {/*  */}
          <div className="last-name">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              placeholder="Enter your last name"
              required
              onChange={onChangeLastName}
            />
          </div>
        </div>
        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="yourname@email.com"
            required
            onChange={onChangeEmail}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
        </div>
        <div className="message-input">
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            value={message}
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            required
            onChange={onChangeMessage}
          ></textarea>
          <span>Please enter a message</span>
        </div>
        <div className="check-field">
          <input type="checkbox" id="checkbox" required />
          <p>You agree to providing your data to {name} who may contact you.</p>
        </div>
        <button type="submit" id="btn__submit" onClick={handleSubmit}>
          Send message
        </button>
      </form>
    </section>
  );
};

export default InputForm;
