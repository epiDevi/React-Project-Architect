import "./Project.css";
import { NavLink } from "react-router-dom";
const Projects = () => {
  return (
    <section className="projects m-t-150">
      <h2 className="light">Our Projects</h2>
      <article className=" projects-fotos">
        <div className="flex">
          <div className="simple">
            <div className="cover">
              <h2 className="bold">Sample Project</h2>
              <NavLink to="/projects">View more →</NavLink>
            </div>
          </div>
          <img src="../src/assets/img/image15.jpg" alt="" />
        </div>
        <div className="flex">
          <img src="../src/assets/img/image16.jpg" alt="" />
          <img src="../src/assets/img/image17.jpg" alt="" />
          <img src="../src/assets/img/image18.jpg" alt="" />
        </div>
      </article>
      <div className="flex-end">
        <NavLink to="/projects" className="btn-black">
          All Projects →
        </NavLink>
      </div>
    </section>
  );
};

export default Projects;
