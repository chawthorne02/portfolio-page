import Me from "../../images/Me.jpg";
import Teacherme from "../../images/Teacherme.jpeg";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/Aboutpage.css";

function Aboutpage() {
  return (
    <div className="about-page">
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="about-img" src={Me} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="about-img" src={Teacherme} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Aboutpage;
