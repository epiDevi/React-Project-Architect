import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="container m-t-150 flex">
          <article>
            <img src="../src/assets/img/footerlogo.png" alt="" />
          </article>
          <article>
            <nav>
              <NavLink to="/contacts">Information</NavLink>
              <NavLink to="/">Main</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/certifications">Certifications</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </nav>
          </article>
          <article>
            <h3 className="bold">Contacts</h3>
            <div className="flex adress m-t-25">
              <img src="../src/assets/img/Vector.png" alt="" />
              <p className="medium">
                1234 Sample Street <br /> Austin Texas 78704
              </p>
            </div>
            <div className="flex tel m-t-25">
              <img src="../src/assets/img/Group.png" alt="" />
              <p className="medium">0987654321</p>
            </div>
            <div className="flex email m-t-25">
              <img src="../src/assets/img/email.png" alt="" />
              <p className="medium">sampleemail@gmail.com</p>
            </div>
          </article>
          <article className="social-media">
            <h3 className="bold">Social Media</h3>
            <article className=" flex m-t-25">
              <img src="../src/assets/img/facebook.png" alt="" />
              <img src="../src/assets/img/shape.png" alt="" />
              <img src="../src/assets/img/LinkedIn.png" alt="" />
              <img src="../src/assets/img/pininterest.png" alt="" />
            </article>
          </article>
        </section>
        <section className="copy-write">
          <p className="regular">© 2021 All Rights Reserved</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
