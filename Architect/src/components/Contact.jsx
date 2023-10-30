import { useEffect } from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="light">Contact Us</h2>
      <section className="flex">
        <form action="">
          <label>
            <h4>Name</h4>
            <input type="text" />
          </label>
          <label>
            <h4>
              Phone Number<span>*</span>
            </h4>
            <input type="text" />
          </label>
          <label>
            <h4>
              E-mail<span>*</span>
            </h4>
            <input type="text" />
          </label>
          <label>
            <h4>Interested in</h4>
            <input type="text" />
          </label>
          <label>
            <h4>
              Message<span>*</span>
            </h4>

            <textarea
              className="star"
              name="message"
              cols="30"
              rows="10"
            ></textarea>
          </label>
        </form>
        <img src="../src/assets/img/image12.jpg" alt="" />
      </section>
      <NavLink to="/projects" className="btn-black">
        Send Email →
      </NavLink>
    </section>
  );
};

export default Contact;
