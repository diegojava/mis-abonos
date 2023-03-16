import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../logo.png'
import ModalUI from './ModalUI'


export default function Menu() {
  return (
    <Navbar variant="dark" className='bg-menu'>
      <Container className='bg-menu'>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="230"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add-new">Añadir abono</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}