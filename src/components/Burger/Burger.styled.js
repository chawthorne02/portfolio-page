import styled from "styled-components";

export const StyledBurger = styled.button`
  position: relative;
  top: 5%;
  // left: 2rem;
  right: 47%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  margin-top: 4px;

  &:focus {
    outline: none;
  }

  @media (max-width: 390px) {
    right: 42%;
  }

  @media (max-width: 768px) {
    right: 42%;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: #fff;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    :nth-child(4) {
      display: none;
    }
  }
`;
