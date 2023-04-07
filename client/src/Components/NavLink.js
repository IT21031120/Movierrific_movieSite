import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavLink() {
    return (
        <Navbar style={{ backgroundColor: '#0B2447', }} expand="lg">
            <Container fluid style={{ marginLeft: '3%', marginRight: '3%' }}>
                <Navbar.Brand href="#" style={{ color: 'white', fontSize: '32px', fontFamily: 'Gabriola', fontWeight: 'bold' }}>MovieTraffic</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '10%' }}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', justifyContent: 'space-between', }}
                        navbarScroll
                    >
                        <Nav.Link className='navBarLinks' href="/">Home</Nav.Link>
                        <Nav.Link className='navBarLinks' href="/MovieCollections">Movies</Nav.Link>
                        <Nav.Link className='navBarLinks' href="/Locations">Locations</Nav.Link>
                        <Nav.Link className='navBarLinks' href="#action2">Adverticing</Nav.Link>
                        <Nav.Link className='navBarLinks' href="#action2">Administration</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavLink;