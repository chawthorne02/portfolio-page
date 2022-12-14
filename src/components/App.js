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

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="about" element={<Aboutpage />} />

          <Route path="resume" element={<Resumepage />} />

          <Route path="projects" element={<Projectspage />} />

          <Route path="contact" element={<Contactpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
