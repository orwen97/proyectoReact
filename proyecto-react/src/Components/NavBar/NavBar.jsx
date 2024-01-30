import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar() {
    return (
        <>
            <Navbar data-bs-theme="dark" className="miNavBar">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Indumentaria</Nav.Link>
                        <Nav.Link href="#pricing">Accesorios</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                    <Nav.Link href="#cart"> <CartWidget/> </Nav.Link>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
