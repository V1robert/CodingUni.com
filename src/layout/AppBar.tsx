import { Navbar, Container, Nav } from "react-bootstrap"
import {Link} from "react-router";


const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* App name on the left */}
                <Navbar.Brand as={Link} to="/">
                    CodingUni
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/courses">
                            Courses
                        </Nav.Link>
                        <Nav.Link as={Link} to="/profile">
                            Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar
