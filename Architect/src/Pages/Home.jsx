import "./Home.css";
import { NavLink } from "react-router-dom";
import Projects from "../components/Project";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <>
      <section className="container">
        <section className="lorum flex">
          <article>
            <h2 className="light">PROJECT</h2>
            <h2 className="bold">Lorum</h2>
          </article>
          <article>
            <div className="lorum-pic end">
              <NavLink to="/projects" className="link">
                view Projects →
              </NavLink>
            </div>
          </article>
        </section>
        <section className="about m-t-150 flex">
          <article className="about-img flex">
            <div>
              <img src="../src/assets/img/Rectangle8.jpg" alt="" />
              <img src="../src/assets/img/Rectangle10.jpg" alt="" />
            </div>
            <div>
              <img src="../src/assets/img/Rectangle9.jpg" alt="" />
            </div>
          </article>
          <article className="light">
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <NavLink to="/contacts" className="link">
              Read more →
            </NavLink>
          </article>
        </section>
        <section className="statment m-t-150">
          <h2 className="light">Main Focus/Mission Statement</h2>
          <article className="flex">
            <div className="flex">
              <h2 className="black">1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className="flex">
              <h2 className="black">2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
          </article>
        </section>
        <Projects />
        <Contact />
      </section>
    </>
  );
};
export default Home;
