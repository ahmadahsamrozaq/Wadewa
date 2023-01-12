import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Col, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

export default function Login() {
  return (
    <div>
      <Container>
        <h2 className="container text-center">Login</h2>
    <Form>
        <Row>
    <Col >
    <img className="img-thumbnail" src="../foto/login.png" />
    </Col>
            <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Alamat Email</Form.Label>
        <Form.Control type="email" placeholder="Masukan email" />
        <Form.Text className="text-muted">
        Kami tidak akan menyebar luaskan email anda.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Col>
    
    </Row>
    </Form>
    </Container>
    </div>
  );
}
