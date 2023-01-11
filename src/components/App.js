import Header from "./Header/Header";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
  BrowserRouter,
  Switch,
  useLocation,
} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Projectspage from "./Projectspage/Projectspage";
import Resumepage from "./Resumepage/Resumepage";
import Contactpage from "./Contactpage/Contactpage";
import Aboutpage from "./Aboutpage/Aboutpage";
import React, { useState, useEffect, useRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import AnimatedRoutes from "./AnimatedRoutes/AnimatedRoutes";
import Burger from "./Burger/Burger";
import useOnClickOutside from "./Hooks/Hooks";
import Menu from "./Menu/Menu";

function App() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="App">
      <Router>
        <nav ref={node}>
          <Header open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </nav>

        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
