import { Navbar, Nav } from 'react-bootstrap'

const MyNav = (props) => (
  <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' >
    <Navbar.Brand href='#' className='ml-5'>{props.branding}</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav>
        <Nav.Link href='#'>Home</Nav.Link>
        <Nav.Link href='#'>About</Nav.Link>
        <Nav.Link href='#'>Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MyNav