import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default class CorComp extends Component {
  render() {
    return (
        <Container>
            <Carousel>
        <Carousel.Item interval={400}>
               
            <img
            className="d-block w-100"
            src="../foto/kwasen2.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Perangkat desa</h3>
            <p>Potret Kebersamaan perangkat desa setelah kegiatan.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src="../foto/kuda.jpeg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Slide kedua</h3>
            <p>Gambaran tentang kegiatan</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../foto/bale.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Tampak depan</h3>
            <p>
                Tampak depan suasana kelurahan yang sedang lengang
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Container>
        );
  }
}
