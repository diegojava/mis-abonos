import { Container, Navbar } from 'react-bootstrap'
import logo from '../logo.png'


export default function Menu() {
  return (
    <Navbar variant="dark" className='bg-menu'>
        <Container className='bg-menu'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="230"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
    </Navbar>
  )
}