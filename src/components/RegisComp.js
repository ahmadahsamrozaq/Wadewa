import React from 'react'
import { Container, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function RegisComp() {
    
  return (
    <div>
        <Container>
        
    <Form >
   
      <Row className="justify-content-md-center">
        
      
        <Col className="justify-content-md-center">
      <img className="rounded mx-auto d-block"  src="../foto/register.png" />
      </Col>
      <h3 className="container text-center">Registrasi Pengguna</h3>
      </Row>
  <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom01">
      <Form.Label>Nama lengkap (Ketik juga nama panggilannya)</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Nama"
        
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    {/* {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
      <Form.Label>Nama Belakang</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Last name"
        defaultValue="Otto"
      /> */}
      {/* <Form.Control.Feedback>Bagus </Form.Control.Feedback>
    </Form.Group> */} 
    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
      <Form.Label>Email</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Email"
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          Masukan Email yang tepat
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
    
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom03">
      <Form.Label>NIK</Form.Label>
      <Form.Control type="text" placeholder="NIK" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid city.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom04">
      <Form.Label>Password</Form.Label>
      <Form.Control type="text" placeholder="Password" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid state.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom05">
      <Form.Label>Nomer Hp(WA) </Form.Label>
      <Form.Control type="text" placeholder="No WA" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid zip.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Alamat Lengkap</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <Button type="submit">Submit</Button>
  </Row>
  {/* <Form.Group className="mb-3">
    <Form.Check
      required
      label="Agree to terms and conditions"
      feedback="You must agree before submitting."
      feedbackType="invalid"
    />
  </Form.Group> */}
  
</Form>
</Container>
  </div>
  )
}
