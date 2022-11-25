import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../../helper/helper";
import DataGrid from "../../grid/grid";
import "../productos.css";

const columns = [
    {
        dataField: "_id",
        text: "ID",
        hidden: true,
    },
    {
        dataField: "producto_id",
        text: "Producto ID",
    },
    {
        dataField: "nombre",
        text: "Nombre",
    },
    {
        dataField: "categoria",
        text: "Categoria",
    },
    {
        dataField: "descripcion",
        text: "Descripcion",
    },
    {
        dataField: "precio",
        text: "Precio",
    },
];

export default class ProductosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        request
            .get(this.props.url)
            .then((response) => {
                this.setState({ rows: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Container id="productos-buscar-container">
                <Row>
                    <h1>Buscar productos</h1>
                </Row>
                <Row>
                    <DataGrid url="/productos" columns={ columns }/>
                </Row>
            </Container>
        );
    }
}
