import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="contacts">
        <h1>Contact Me</h1>
        <div>
          <ul>
            <li>
              <a href="tel:+2348134843836">
                {" "}
                <FaPhone /> 08134843836
              </a>
            </li>
            <li>
              <a href="mailto:oghenekevwe27@gmail.com">
                <FaEnvelope />{" "}
                oghenekevwe27@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
