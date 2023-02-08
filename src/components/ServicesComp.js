import react from "react";
import { Container, Row, Col } from "react-bootstrap";


const ServicesComp = () => {
    return (
    <div className="services min-vh-100 d-flex align-items-center" id="services">
        <Container>
            <Row className="mb-5">
                <Col>
                <h1 className="text-center fw-bold" data-aos="fade-down">Services</h1>
                <p className="text-center" data-aos="fade-down" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur.</p>
                </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1">
                <Col className="text-center py-5 px-3" data-aos="fade-down" data-aos-delay="400">
                <i class="fa-solid fa-coins fs-2 mb-4"></i>
                <h5 className="fw-bold">Harga Terjangkau</h5>
                <h5>Lorem ipsum dolor sit amet.</h5>
                </Col>
                <Col className="text-center py-5 px-3" data-aos="fade-down" data-aos-delay="600">
                <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
                <h5 className="fw-bold">Services Aman</h5>
                <h5>Lorem ipsum dolor sit amet.</h5>
                </Col>
                <Col className="text-center py-5 px-3" data-aos="fade-down" data-aos-delay="800">
                <i class="fa-solid fa-shield-halved fs-2 mb-4"></i>
                <h5 className="fw-bold">Terjamin</h5>
                <h5>Lorem ipsum dolor sit amet.</h5>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default ServicesComp;