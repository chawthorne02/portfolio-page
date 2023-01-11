import { StyledMenu } from "./Menu.styled";
import Homepage from "../Homepage/Homepage";
import Aboutpage from "../Aboutpage/Aboutpage";
import Projectspage from "../Projectspage/Projectspage";
import resume from "../../images/resume.pdf";
import { Link } from "react-router-dom";

function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <a href={resume} target="_blank">
        Resume
      </a>
    </StyledMenu>
  );
}

export default Menu;
