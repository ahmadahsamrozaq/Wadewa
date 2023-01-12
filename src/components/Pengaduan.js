import React from 'react'
import { Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


export default function Pengaduan() {
  return (
      <div>
        <Container>
    <Form >
      <h2 className="container text-center"> Formulir Pengaduan</h2>
      <Row >
          <Col>
          <img className="img-thumbnail" src="../foto/personaltext.png" />
          </Col>
        <Col>
    <InputGroup className="mb-3">
      <InputGroup.Text>Nama Lengkap dan Panggilan</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
    </InputGroup>
  {/* <Row className="mb-3"> */}
    <Form.Group as={Col} md="5" controlId="validationCustom03">
      <Form.Label>NIK</Form.Label>
      <Form.Control type="text" placeholder="NIK" required />
      <Form.Label>Nomer Hp(WA) </Form.Label>
      <Form.Control type="text" placeholder="No WA" required />
    </Form.Group>
    <Col>
    <Form.Group  controlId="formGridState">
          <Form.Label>Dusun</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Pilih</option>
            <option>Binangun</option>
            <option>Kalisat</option>
            <option>Karang Jati</option>
            <option>Karangmiri</option>
            <option>Kwasen Tengah</option>
            <option>Kwasen Barat</option>
            <option>Kwasen Timur</option>
            <option>Legundi</option>
            <option>Suwangan</option>
          </Form.Select>
        </Form.Group>
        </Col>
        <Form.Group  controlId="formGridState">
          <Form.Label>Jenis Pengaduan</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Pilih</option>
            <option>Surat Domisili</option>
            <option>Surat Domisili</option>
            <option>Surat Pengantar SKCK</option>
            <option>Keterangan Tidak Mampu</option>

          </Form.Select>
        </Form.Group>

  {/* </Row> */}
<Row>
  <Col>
  <Button type="submit">Submit</Button>
  </Col>
  </Row>
  </Col>
  </Row>
</Form>
</Container>
  </div>
  )
}
