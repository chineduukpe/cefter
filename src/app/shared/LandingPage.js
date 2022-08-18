import React from "react";
import { Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Button, MDIcon } from "../components";

const dummyProducts = [
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West",
        img: "/img/products/rice.jpeg"
    },
    {
        name: "Corn",
        farm: "Tersoo Farms",
        price: "125.34/KG",
        location: "Gboko",
        img: "/img/products/corn.webp"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "FCT",
        img: "/img/products/rice.jpeg"
    },
    {
        name: "Beans",
        farm: "Ajayi Terna LTD",
        price: "30,384.22/ton",
        location: "Sabon Gari",
        img: "/img/products/beans.webp"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West",
        img: "/img/products/rice.jpeg"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
    {
        name: "Rice",
        farm: "Chinedu farm LTD",
        price: "1,293.39/KG",
        location: "Gwer West"
    },
]

export default class LandingPage extends React.Component {
    state = {
        showOrder: false,
    }

    render() {
        return (
            <div className="container">
                <Modal
                    show={this.state.showOrder}
                    onHide={() => this.setState({ showOrder: false })}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Accept Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You are about to place order for this product. Enter quantity needed
                        <Form.Group>
                            <Form.Control type="text" id="exampleInputUsername1" placeholder="Quantity Needed" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ showOrder: false })}>
                            Close
                        </Button>
                        <Button variant="success">Order</Button>
                    </Modal.Footer>
                </Modal>
                <div className="row p-2 py-5">
                    <div className="col-md-3">
                        <h3>CEFTER e-COM</h3>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-5">
                        <p>
                            <span className="mr-3">Home</span>
                            <span className="mr-3">About</span>
                            <span className="mr-3">Contact</span>
                            <span className="mr-3">Products</span>
                            <Link to='/login'>
                                <Button variant="primary" value="Login" />
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <h1 className="text-primary">Product Listing</h1>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            {
                                dummyProducts.map((product, index) => {
                                    return <div key={index} className="m-3 col-md-2 bg-muted p-3 rounded shadow-sm" style={{ backgroundColor: "#222" }}>
                                        <img alt="Product" src={product.img} style={{ width: '100%' }} className="img img-responsive" />
                                        <h4><span className="d-inline-flex icon icon-box-success"><MDIcon icon="mdi mdi-lumx" /></span> <span>{product.name}</span></h4>
                                        <p className="text-muted">{product.farm}</p>
                                        <p className="text-">NGN {product.price}</p>
                                        <p className="text-primary"><MDIcon icon="mdi-map-marker text-primary" /> {product.location}</p>
                                        <hr />
                                        <button className="btn btn-primary" onClick={() => this.setState({ showOrder: true })}>Request <MDIcon
                                            icon="mdi-cart-plus  cursor-pointer"
                                        /> </button>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}