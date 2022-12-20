import { useState } from "react";
import Card from "react-bootstrap/Card";
import "../../styles/Projectspage.css";


const INITIAL_PROJECTS = [
  {
    id: 1,
    name: "Better Minds Tutoring App",
    description:
      "Created a tutoring app that users are able to find and connect with a certified tutor for a personalized learning plan. Once the user is connected with the tutor of their choosing, the tutor can leave notes for students about lessons, keep track of student progression, and also assign the students lessons all from within the app. Students can also leave messages for the tutor on lessons allowing for smooth communication throughout the learning process.",
    language:
      "HTML, CSS, React, Django, Django Rest FrameWork, SendGrid Email Api, Pillow, React-Bootsrap",
    image: require("../../images/bettermindsapp.jpeg"),
  },
  {
    id: 2,
    name: "JavaScript Turn-Based Game",
    description:
      "Created a turn based battle game with a group. If you're thinking of what type of turn-based game, think of old-school Pokemon game battle scenarios. In the group, I was in charge of the styling and the animation that when a player took damage their card would flash.",
    language: "HTML, CSS, JavaScript",
    image: require("../../images/Turn-Base-Game.jpeg"),
  },
  {
    id: 3,
    name: "Django Newspaper App",
    description:
      "Created a newspaper app that had different permissions for each user; non authenticated user, authenticated user, and the admin. ",
    language: "HTML, CSS, React, Django, Django Rest FrameWork, React-Bootsrap",
    image: require("../../images/newspaperapp.jpeg"),
  },
  {
    id: 4,
    name: "Pixel Perfect",
    description:
      "Created a  HTML page based  off of an image file that was given.  Also making the site a pixel perfect match according to the desktop image.",
    language: "HTML, CSS",
    image: require("../../images/pixel-perfect.jpeg"),
  },
];

function Projectspage() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  const projectsList = projects.map((project) => {
    return (
      <li key={project.id} className="project-list">
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
          </Card.Body>
        </Card>
      </li>
    );
  });

  return <ul className="project-cards">{projectsList}</ul>;
}

export default Projectspage;
