import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#elEstudio">FinanSolution</Nav.Link>
            <Nav.Link href="#nS">Nosotros</Nav.Link>
            <Nav.Link href="#aP">Por qué elegirnos</Nav.Link>
            <Nav.Link href="#clientesWeb">Comprar</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar