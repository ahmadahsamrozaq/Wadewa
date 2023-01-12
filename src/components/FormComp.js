import React, { Component } from 'react'
import { Form, Row, Button, Col, Container  } from 'react-bootstrap'

export default class FormComp extends Component {
  render() {
    return (
        <Container>
        <Form>
        <Row className="mb-3 Container">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>NIK</Form.Label>
            <Form.Control type="email" placeholder="Masukan NIk" />
            </Form.Group>
            <Form.Group as={Col} controlId="Ganti Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Alamat</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Nama Jalan</Form.Label>
            <Form.Control placeholder="Nama jalan, nomor rumah" />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Kota</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Kode Pos</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form> 
        </Container>
    )
  }
}
