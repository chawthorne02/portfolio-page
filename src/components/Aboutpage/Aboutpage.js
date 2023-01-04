import Me from "../../images/Me.jpg";
import Teacherme from "../../images/Teacherme.jpeg";
import skydive from "../../images/skydive.jpeg";
import graduationpic from "../../images/graduationpic.jpeg";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/Aboutpage.css";
import { motion } from "framer-motion";

function Aboutpage({ loading }) {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="about-img" src={Me} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="about-img" src={Teacherme} alt="Second slide" />

          <Carousel.Caption>
            <h3>My classroom</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="about-img" src={skydive} alt="Third slide" />

          <Carousel.Caption>
            <h3>Skydiving</h3>
            <p>Such an adrenaline rush!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="about-img" src={graduationpic} alt="Fourth slide" />

          <Carousel.Caption>
            <h3>My family</h3>
            <p>My biggest support system. Oh yeah, Go Gamecocks!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className="about-text">
        Changing careers from teaching to software developing was a big jump for
        me. From leading the classroom to now being back on the other side just
        showed how much I have a passion to learn and constantly better myself.
        Joining Carolina Code School gave me that opportunity to keep pushing my
        knowledge even further. Now that I have graduated, I am excited to
        continue that learning process and see where it takes me.
      </p>
    </motion.div>
  );
}

export default Aboutpage;
