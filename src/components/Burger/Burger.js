import { StyledBurger } from "./Burger.styled";

function Burger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
}

export default Burger;
