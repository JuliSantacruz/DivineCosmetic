import React from "react";
import { Container, Row, Nav } from "react-bootstrap";
import "./productos.css";
import ProductosBuscar from './crud/buscar';
import ProductosCrear from './crud/crear';

export default class Productos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'buscar',
        };
    }
    changeTab(tab) {
        this.setState({ currentTab: tab });   
    }  
    render() {
        return (
            <Container id="productos-container">
                <Row>
                    <Nav fill variant="tabs"
                        defaultActiveKey="/buscar"
                        onSelect={(eventKey) => this.setState({currentTab:eventKey})}>
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ?
                        (<ProductosBuscar />) : (<ProductosCrear changeTab={(Tab) =>
                        this.changeTab(Tab)} />) }
                </Row>
            </Container>
        );
    }
}
