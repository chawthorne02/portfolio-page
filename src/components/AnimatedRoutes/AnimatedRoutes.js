import {
  Routes,
  Route,
  useNavigate,
  Link,
  BrowserRouter,
  Switch,
  useLocation,
} from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Projectspage from "../Projectspage/Projectspage";
import Resumepage from "../Resumepage/Resumepage";
import Contactpage from "../Contactpage/Contactpage";
import Aboutpage from "../Aboutpage/Aboutpage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Homepage />} />

          <Route path="about" element={<Aboutpage />} />

          <Route path="resume" element={<Resumepage />} />

          <Route path="projects" element={<Projectspage />} />

          <Route path="contact" element={<Contactpage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
