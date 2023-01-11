import { StyledBurger } from "./Burger.styled";
import "../../styles/Homepage.css";

function Burger({ open, setOpen }) {
  return (
    <StyledBurger className="Burger" open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
}

export default Burger;
