import Link from 'next/link'
import Image from 'next/image'
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const Navbarr = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"> 
                        <a><Image src="/247TRAVELS-logo.webp" width={235} height={73} alt={"company Logo"}  /></a> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/travel-financing">Travel Financing</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <NavDropdown title="Login/Register" id="basic-nav-dropdown" className="react-dropdown-custom">
                        <NavDropdown.Item href="/access-comps/login">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/access-comps/signup">Sign Up</NavDropdown.Item>
                      
                        </NavDropdown>
                        <NavDropdown title="Affiliate" id="affiliate-nav-dropdown" className="affliate-dropdown-custom">
                        <NavDropdown.Item href="/access-comps/affiliateLogin">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/access-comps/signup_agency">Registration</NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavDropdown.Item href="/access-comps/signup_agency">Affiliates Portal</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>     
    
    )
  }
  export default Navbarr;