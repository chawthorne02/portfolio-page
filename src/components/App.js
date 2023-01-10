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
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import AnimatedRoutes from "./AnimatedRoutes/AnimatedRoutes";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";

function App() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Router>
        <nav>
          <Header open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen} />
        </nav>

        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
