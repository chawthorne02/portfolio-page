import { useState } from "react";
import Card from "react-bootstrap/Card";
import "../../styles/Projectspage.css";
import betterminds from "../../images/bettermindsapp.jpeg";
import turnBase from "../../images/Turn-Base-Game.jpeg";
import newspaper from "../../images/newspaperapp.jpeg";
import pixelPerfect from "../../images/pixel-perfect.jpeg";
import { motion, useScroll } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const INITIAL_PROJECTS = [
  {
    id: 1,
    name: "Better Minds Tutoring App",
    description:
      "Created a tutoring app that users are able to find and connect with a certified tutor for a personalized learning plan. Once the user is connected with the tutor of their choosing, the tutor can leave notes for students about lessons, keep track of student progression, and also assign the students lessons all from within the app. Students can also leave messages for the tutor on lessons allowing for smooth communication throughout the learning process.",
    language:
      "HTML, CSS, React, Django, Django Rest FrameWork, SendGrid Email Api, Pillow, React-Bootsrap",
    image: require("../../images/bettermindsapp.jpeg"),
    link: "https://github.com/chawthorne02/ccs-final-project",
  },
  {
    id: 2,
    name: "JavaScript Turn-Based Game",
    description:
      "Created a turn based battle game with a group. If you're thinking of what type of turn-based game, think of old-school Pokemon game battle scenarios. In the group, I was in charge of the styling and the animation that when a player took damage their card would flash.",
    language: "HTML, CSS, JavaScript",
    image: require("../../images/Turn-Base-Game.jpeg"),
    link: "https://github.com/chawthorne02/Turn-Based-Game",
  },
  {
    id: 3,
    name: "Django Newspaper App",
    description:
      "Created a newspaper app that had different permissions for each user; non authenticated user, authenticated user, and the admin. ",
    language: "HTML, CSS, React, Django, Django Rest FrameWork, React-Bootsrap",
    image: require("../../images/newspaperapp.jpeg"),
    link: "https://github.com/chawthorne02/django_newspaper_app",
  },
  {
    id: 4,
    name: "Pixel Perfect",
    description:
      "Created a  HTML page based  off of an image file that was given.  Also making the site a pixel perfect match according to the desktop image.",
    language: "HTML, CSS",
    image: require("../../images/pixel-perfect.jpeg"),
    link: "https://github.com/chawthorne02/Pixel-Perfect",
  },
];

function Projectspage() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const { scrollYProgress } = useScroll();

  const projectsList = projects.map((project) => {
    return (
      <li key={project.id} className="project-list">
        <h2 className="project-title">{project.name}</h2>
        <Card className="card">
          <Card.Img
            className="projects-img"
            variant="top"
            src={project.image}
          />
          <Card.Body className="card-body">
            <Card.Title>{project.name}</Card.Title>
            <p>{project.description}</p>
            <li className="languages">{project.language}</li>
            <a href={project.link} target="_blank" className="project-link">
              <BsGithub />
            </a>
          </Card.Body>
        </Card>
      </li>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ul className="project-cards">{projectsList}</ul>
    </motion.div>
  );
}

export default Projectspage;
