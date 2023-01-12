import React, { Component } from 'react'
import { Nav, NavDropdown, Navbar, Form, Button, Container } from 'react-bootstrap';



export default class NavComp extends Component {
  render() {
    return (

      <div>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Wadewa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link >Profil</Nav.Link>
            <Nav.Link href="#link">Kontak</Nav.Link>
            <NavDropdown title="Pelayanan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Surat</NavDropdown.Item>
              <NavDropdown.Item href="FormComp.js">
                Keterangan Domisili
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Berita
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button  variant="outline-success">Cari</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


    )
  }
}
