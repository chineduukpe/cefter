import React from "react";
import { MDIcon } from "../../components";
import Modal from 'react-bootstrap/Modal'
import { Button, Form } from "react-bootstrap";

export default class FarmerOrders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAcceptDialogue: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        return this.setState({ showAcceptDialogue: true })
    }

    handleClose() {
        return this.setState({ showAcceptDialogue: false })
    }

    render() {
        return <div className="row">
            <Modal
                show={this.state.showAcceptDialogue}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Accept Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You are about to accept this order. Set available quantity
                    <Form.Group>
                        <label htmlFor="exampleInputUsername1">Username</label>
                        <Form.Control type="text" id="exampleInputUsername1" placeholder="Quantity Available" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Accept</Button>
                </Modal.Footer>
            </Modal>
            <div className="col-12">
                <h3> <MDIcon icon='mdi-table-large text-success' /> My order requests</h3>
            </div>
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <div className="form-check form-check-muted m-0">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </th>
                                <th> Buyer </th>
                                <th> Order No </th>
                                <th> Product Cost </th>
                                <th> Product </th>
                                <th> Qty </th>
                                <th> Payment Mode </th>
                                <th> Date </th>
                                <th> Status </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check form-check-muted m-0">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex">
                                        {/* <img src={require('../../assets/images/faces/face1.jpg')} alt="face" /> */}
                                        <span className="pl-2">Chinedu Ukpe</span>
                                    </div>
                                </td>
                                <td> 02312 </td>
                                <td> <del>N</del> 14,500 </td>
                                <td> Rice </td>
                                <td> 30 tons </td>
                                <td> N/A </td>
                                <td> 04 Feb 2022 </td>
                                <td>
                                    <div className="badge badge-outline-info">Ordered</div>
                                </td>
                                <td>
                                    <div onClick={this.handleShow} className="preview-thumbnail" style={{ cursor: 'pointer', backgroundColor: "#393", borderRadius: '50%', height: '20px', width: '20px', textAlign: 'center', lineHeight: '20px' }}>
                                        <MDIcon icon="mdi-check" style={{ color: "#fff" }} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check form-check-muted m-0">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex">
                                        {/* <img src={require('../../assets/images/faces/face1.jpg')} alt="face" /> */}
                                        <span className="pl-2">Chinedu Ukpe</span>
                                    </div>
                                </td>
                                <td> 02312 </td>
                                <td>  <del>N</del> 14,500 </td>
                                <td> Soya Beans </td>
                                <td> 23 kg </td>
                                <td> Card </td>
                                <td> 13 Feb 2022 </td>
                                <td>
                                    <div className="badge badge-outline-warning">Dispatched</div>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check form-check-muted m-0">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex">
                                        {/* <img src={require('../../assets/images/faces/face1.jpg')} alt="face" /> */}
                                        <span className="pl-2">Chinedu Ukpe</span>
                                    </div>
                                </td>
                                <td> 02312 </td>
                                <td> <del>N</del> 14,500 </td>
                                <td> Sesame </td>
                                <td> 18 tons </td>
                                <td> Card </td>
                                <td> 04 Feb 2022 </td>
                                <td>
                                    <div className="badge badge-outline-warning">Dispatched</div>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check form-check-muted m-0">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex">
                                        {/* <img src={require('../../assets/images/faces/face1.jpg')} alt="face" /> */}
                                        <span className="pl-2">Chinedu Ukpe</span>
                                    </div>
                                </td>
                                <td> 02312 </td>
                                <td> <del>N</del> 14,500 </td>
                                <td> Soya Beans </td>
                                <td> 33 kg </td>
                                <td> Card </td>
                                <td> 04 Feb 2022 </td>
                                <td>
                                    <div className="badge badge-outline-success">Received</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    }
}