import { StyledMenu } from "./Menu.styled";
import Homepage from "../Homepage/Homepage";
import Aboutpage from "../Aboutpage/Aboutpage";
import Projectspage from "../Projectspage/Projectspage";
import resume from "../../images/resume.pdf";
import { Link } from "react-router-dom";

function Menu({open}) {
  return (
    <StyledMenu open={open}>
      <a href={<Homepage />}>Home</a>
      <a href={<Aboutpage />}>About</a>
      <a href={<Projectspage />}>Projects</a>
      <a href={resume}>Resume</a>
    </StyledMenu>
  );
}

export default Menu;
