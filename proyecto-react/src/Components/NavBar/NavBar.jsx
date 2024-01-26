import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import CartWidget from "../cartWidget/CartWidget";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Indumentaria</Nav.Link>
                        <Nav.Link href="#pricing">Accesorios</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <Nav.Link href="#pricing"> <CartWidget/> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
