import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
export default class inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <Carousel fixed="center" id="carousel" bg="primary" expand="lg" variant="dark">

                <Carousel.Item>
                    <img
                        className="d-block"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Bienvenido a nuestra tienda virtual</h2>
                        <h4>En donde encontraras los mejores precios del mercado</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block c"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption id="texto-2">
                        <h2>Productos de la mas alta calidad</h2>
                        <h4>Siempre pensamos en el consumidor.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption id="texto-3">
                        <h2>Ingresa con tu usuario</h2>
                        <h4>
                            Consulta nuestro catalogo.
                        </h4>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        );
    }
}