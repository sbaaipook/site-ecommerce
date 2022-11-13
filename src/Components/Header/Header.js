import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MdOutlineLocalGroceryStore} from "react-icons/md"
import "./Header.css";


const Header =(props)=>{
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Acceil</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href={props.count===0?"/":"/panier"}className="position-r" ><MdOutlineLocalGroceryStore/><span className="position-a notify">{props.count}</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;



