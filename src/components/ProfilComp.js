import React, { Component } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

export default class ProfilComp extends Component {
  render() {
    return (
      <div>

        <h2 className="container text-center">Profil Desa</h2>
        <Row>
          <Col>
        <img className="img-thumbnail" src="../foto/profil.png" />
          </Col>
        <Col>
        <Container>
        <Accordion defaultActiveKey="0" flush >
      <Accordion.Item eventKey="1">
        <Accordion.Header>Dimana desa kwasen Itu?</Accordion.Header>
        <Accordion.Body>
          Desa kwasen terletak di antara desa-desa yang ada pada kecamatan kesesi
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item >
        <Accordion.Header>Berapa jumlah Penduduk Desa Kwasen?</Accordion.Header>
        <Accordion.Body>
        <p>Menurut data yang ada berdasarkan informasi dari salah satu perangkat desa yang bertugus sensus</p>
        <p>Warga di kwasen berjumlah sebanyak 1928 Laki-laki dan 1886 Perempuan</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item >
        <Accordion.Header>Apa mayoritas pekerjaan warga Desa Kwasen?</Accordion.Header>
        <Accordion.Body>
          Mayoritas pekerjaan warga adalah bertani, dan sebagian ada juga yang memiliki usaha konveksi.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Apa visi misi desa Kwasen</Accordion.Header>
        <Accordion.Body>
          Visi misi desa kwasen adalah ... Unknown
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    </Col>
    </Row>
      </div>
    )
  }
}
