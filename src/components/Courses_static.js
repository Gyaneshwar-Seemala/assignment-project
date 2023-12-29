import { Container, Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ai from '../assets/img/AI-image.jpg';
import Dev from '../assets/img/Dev-image.jpg';
import Web from '../assets/img/web-image.avif';
import qa from '../assets/img/qa-image.jpg';
import colorSharp from '../assets/img/color-sharp.png';
import '../styles/Courses_static.css'

export const Courses_static=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="course" id='courses'>
            <Container>
                <Row>
                    <Col>
                    <div className="course-bx">
                        <h2>
                            Courses Offered
                        </h2>
                        <p>Our expertise spans diverse domains, from Artificial Intelligence and DevOps to Web Development and QA</p>
                        <Carousel responsive={responsive} infinite className="course-slider">
                            <div className="item">
                                <img src={Ai} alt="AI"/>
                                <h5>Artificial Intelligence</h5>
                            </div>
                            <div className="item">
                                <img src={Dev} alt="Devops"/>
                                <h5>DevOps</h5>
                            </div>
                            <div className="item">
                                <img src={Web} alt="WebDev"/>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={qa} alt="QA"/>
                                <h5>Quality Assurance</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}