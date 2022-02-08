import { Navbar, Nav } from 'react-bootstrap'

const Navbar = (props) => (
  <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
    <Navbar.Brand href='#'>{props.branding}</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='ml-auto'>
        <Nav.Link href='#'>Home</Nav.Link>
        <Nav.Link href='#'>About</Nav.Link>
        <Nav.Link href='#'>Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navbar