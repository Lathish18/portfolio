import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const clearMessages = () => {
    setTimeout(() => {
      setErrMsg('');
      setSuccessMsg('');
    }, 10000); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !message) {
      setErrMsg('All fields are required!');
      return;
    }

    if (!emailValidation()) {
      setErrMsg('Invalid email format!');
      clearMessages();
      return;
    }

    const formData = new FormData(e.target);
    formData.append("access_key", "cdece4ec-0359-4b39-ac58-5b4470300322");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json"
        },
        body: json
      }).then((response) => response.json());

      if (response.success) {
        setSuccessMsg('Message sent successfully!');
        setErrMsg('');
        setUsername('');
        setPhoneNumber('');
        setEmail('');
        // setSubject('');
        setMessage('');
      } else {
        setErrMsg('Failed to send message: ' + response.message);
      }
      clearMessages();
    } catch (error) {
      setErrMsg('Error: ' + error.message);
      clearMessages();
    }
  };

  return (
    <section id="contact" className="w-full py-10 border-b-[1px] border-b-black px-4">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col mdl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full mdl:w-[55%] bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 px-4 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSubmit}>
              <div className="w-full flex flex-row gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`contactInput ${!username && errMsg && "outline-designColor"}`}
                    type="text"
                    name="name"
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`contactInput ${!phoneNumber && errMsg && "outline-designColor"}`}
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`contactInput ${!email && errMsg && "outline-designColor"}`}
                  type="email"
                  name="email"
                />
              </div>
              {/* <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`contactInput ${!subject && errMsg && "outline-designColor"}`}
                  type="text"
                  name="subject"
                />
              </div> */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`contactTextArea ${!message && errMsg && "outline-designColor"}`}
                  cols="30"
                  rows="4"
                  name="message"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {errMsg && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce mt-10">
          {errMsg}
        </p>
      )}
      {successMsg && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce mt-10">
          {successMsg}
        </p>
      )}
    </section>
  );
};

export default Contact;
