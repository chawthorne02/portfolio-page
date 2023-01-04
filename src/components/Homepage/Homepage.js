import "../../styles/Homepage.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";
import { motion } from "framer-motion";

function Homepage({ loading }) {
  return (
    <motion.div
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="homepage-title">Corey Hawthorne</section>
      <p className="homepage-subtitle">
        Software Developer looking to further improve my skills and further
        myself as a developer. I dabble in both the frontend and the backend.
        Always looking to learn more about new technologies
      </p>
      <section className="homepage-socials">
        <a href="https://github.com/chawthorne02" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/corey-hawthorne-80a2581b6/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="mailto: chawthorne02@gmail.com">
          <MdEmail />
        </a>
      </section>
    </motion.div>
  );
}

export default Homepage;
