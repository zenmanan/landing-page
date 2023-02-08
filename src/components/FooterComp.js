import react from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
    return (
    <div className="footer pb-3 pt-4">
        <Container>
        <Row>
            <Col>
            <h3 className="fw-bold text-white">Ngoxding.</h3>
            </Col>
            <Col className="text-end">
            <i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i>
            <i class="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
            <i class="fa-brands fa-linkedin text-white fs-1 mx-lg-3 mx-2"></i>
            </Col>
        </Row>
        <Row>
            <Col>
            <p className="text-center text-white-50">&copy; Copyright by Uwa Occo 2023, All Right Reserved.</p>
            </Col>
        </Row>
        </Container>
        </div>

    );
};

export default FooterComp;