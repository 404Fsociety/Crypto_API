import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="transparent" data-bs-theme="dark" style={{paddingTop:"2rem"}}>
      <Container>
        <Navbar.Brand as={Link} to={'/'} style={{fontFamily:"monospace",fontSize:"30px",fontWeight:'600',marginRight:"63%"}}>Crypto-<span style={{color:"rgb(90, 223, 137)"}}>Tunisia</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} style={{fontFamily:"sans-serif",fontSize:"18px",fontWeight:'400',color:"white"}}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/Users'} style={{fontFamily:"sans-serif",fontSize:"18px",fontWeight:'400',color:"white"}}>Users</Nav.Link>
            <Nav.Link as={Link} to={'/ContactUs'} style={{fontFamily:"sans-serif",fontSize:"18px",fontWeight:'400',color:"white"}}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;