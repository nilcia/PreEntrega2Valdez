import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to="/">ñañotysucus</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/category/1"><Nav.Link href="#echecerias">Echeverias</Nav.Link></Link>
                            <Link to="/category/2"><Nav.Link href="#cactus">Cactus</Nav.Link></Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#cart">
                                <CardWidget /> 2
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarMenu;