import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            <Nav.Link href="#elEstudio" bg="dark" variant="dark">FinanSolution</Nav.Link>
            <NavLink to='/categoria/int'>Acc-int</NavLink>
            <Nav.Link href="#clientesWeb">Comprar</Nav.Link>
            <NavLink to='/categoria/nac'>Acc-nac</NavLink>
          </Nav>
          <Link to='/cart'>
            <CartWidget/>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar