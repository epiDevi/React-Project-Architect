import "./Header.css";
import Logo from "../assets/svg/logo";
import Mouth from "../assets/svg/mouth";
import Sun from "../assets/svg/sun";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/Context";
import { useContext } from "react";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((theme) => !theme);
    console.log(theme);
  };
  return (
    <>
      <header className="flex">
        <Logo />
        <article className="right flex">
          <nav>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
          <div className={theme ? "hide" : "show"} onClick={toggleTheme}>
            <Mouth />
          </div>
          <div className={theme ? "show" : "hide"} onClick={toggleTheme}>
            <Sun />
          </div>
        </article>
      </header>
    </>
  );
};

export default Header;
// header {
//   svg {
//     g {
//       path {
//         fill: white;
//       }
//     }
//   }
// }
