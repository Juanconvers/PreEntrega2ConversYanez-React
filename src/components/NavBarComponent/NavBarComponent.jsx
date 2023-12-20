
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../CartWidget/Cartwidget';

import Logo from "../../assets/img/LogoFrankyCharly.png"

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary" style={{background: "#f4a460", padding: "10", fontWeight: "700"}}>
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={Logo} alt="LogoHome" style={{width: 120, padding:15}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Niños</Nav.Link>
            <Nav.Link href="#action2">Niñas</Nav.Link>
            <Nav.Link href="#action3">Accesorios</Nav.Link>
            <Nav.Link href="#action4">Políticas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <Cartwidget/>
      
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;