import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const AppNavbar = () => {
    return (
        <Navbar expand="lg" className="theme-navbar" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    CodingUni
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar
