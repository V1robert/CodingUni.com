import {Col, Container, Row} from "react-bootstrap";
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaPrint,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "#1976d2",
                color: "white",
                paddingTop: "2.5rem",
                paddingBottom: "2.5rem",
            }}
        >
            <Container>
                <Row className="justify-content-between g-4">
                    {/* Left Section */}
                    <Col xs={12} md={6} lg={4}>
                        <h5 className="mb-3">Contattaci</h5>

                        <Row className="g-3">
                            {/* Email */}
                            <Col xs={12} sm={4}>
                                <h6>Email</h6>

                                <div className="d-flex align-items-center mb-2">
                                    <FaEnvelope size={14} className="me-2"/>
                                    <small>exolab@exolab.it</small>
                                </div>

                                <div className="d-flex align-items-center mb-2">
                                    <FaEnvelope size={14} className="me-2"/>
                                    <small>prodotti@exolab.it</small>
                                </div>

                                <div className="d-flex align-items-center mb-2">
                                    <FaEnvelope size={14} className="me-2"/>
                                    <small>curriculum@exolab.it</small>
                                </div>

                                <div className="d-flex align-items-center">
                                    <FaEnvelope size={14} className="me-2"/>
                                    <small>PEC: exolab@legalmail.it</small>
                                </div>
                            </Col>

                            {/* Address */}
                            <Col xs={12} sm={4}>
                                <h6>Sede</h6>

                                <div className="d-flex align-items-start">
                                    <FaMapMarkerAlt size={14} className="me-2 mt-1"/>
                                    <small>
                                        Via G.A. Sartorio, 30
                                        <br/>
                                        00147 ROMA, ITALIA
                                    </small>
                                </div>
                            </Col>

                            {/* Phone */}
                            <Col xs={12} sm={4}>
                                <h6>Contatti</h6>

                                <div className="d-flex align-items-center mb-2">
                                    <FaPhone size={14} className="me-2"/>
                                    <small>(+39) 06 522 05530</small>
                                </div>

                                <div className="d-flex align-items-center">
                                    <FaPrint size={14} className="me-2"/>
                                    <small>(+39) 06 522 44372</small>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    {/* Social Section */}
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <h5 className="mb-3">Follow Us</h5>

                        <div className="d-flex justify-content-center gap-3">
                            <a
                                href="https://facebook.com"
                                className="text-white"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20}/>
                            </a>

                            <a
                                href="https://twitter.com"
                                className="text-white"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20}/>
                            </a>

                            <a
                                href="https://github.com"
                                className="text-white"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20}/>
                            </a>

                            <a
                                href="https://linkedin.com"
                                className="text-white"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20}/>
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Bottom */}
                <Row className="mt-4">
                    <Col className="text-center">
                        <small style={{opacity: 0.8}}>
                            © 2026 ExoUniversity. All rights reserved.
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
