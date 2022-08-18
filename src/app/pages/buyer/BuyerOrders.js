import React, { useState } from "react";
import { MDIcon } from "../../components";
import Modal from 'react-bootstrap/Modal'
import { Button, Form } from "react-bootstrap";
import { useMonnifyPayment, MonnifyButton, MonnifyConsumer } from 'react-monnify';
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function BuyerOrders(props) {


    const [showAcceptDialogue, setShowAcceptDialogue] = useState(false);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showAcceptDialogue: false,
    //         amount: 5000,
    //         currency: 'NGN',
    //         reference: '' + Math.floor(Math.random() * 1000000000 + 1),
    //         customerFullName: 'John Doe',
    //         customerEmail: 'monnify@monnify.com',
    //         customerMobileNumber: '08121281921',
    //         apiKey: 'MK_TEST_SAF7HR5F3F',
    //         contractCode: '4934121693',
    //         paymentDescription: 'Test Pay',
    //         isTestMode: true,
    //         metadata: {
    //             name: 'Damilare',
    //             age: 45,
    //         },
    //     }

    //     this.handleClose = this.handleClose.bind(this);
    //     this.handleShow = this.handleShow.bind(this);
    //     this.handleCheckout = this.handleCheckout.bind(this);
    // }

    const handleShow = () => {
        return setShowAcceptDialogue(true)
    }

    const handleClose = () => {
        return setShowAcceptDialogue(false)
    }


    // const { onComplete, onClose } = useMonnifyPayment({
    //     isTestMode: true,
    //     apiKey: `MK_TEST_SAF7HR5F3F`,
    //     contractCode: '4934121686',
    //     amount: 30000,
    //     currency: "NGN",
    //     customerFullName: "Chinedu Ukpe",
    //     customerEmail: "geefive3@gmail.com",
    //     customerMobileNumber: "08038080619",
    //     paymentDescription: "Being payment for CEFTER food ecom",
    //     redirectUrl: "http://localhost:3000/dashboard/buyer",
    //     paymentStatus: "PAID",
    //     onComplete: () => console.log("Completedd"),
    //     onClose: () => console.log("Closed"),
    // })


    return (<div className="row">
        <Modal
            show={showAcceptDialogue}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You are about to checkout and pay for this order
                <h4>Continue?</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Link to="/checkout"><Button variant="success" >
                    Checkout
                </Button></Link>
                {/* <MonnifyButton
                    text="Make Payment"
                    className="btn btn-success"
                    onComplete={onComplete}
                    close={onClose}
                    disabled={true}
                    embed={true}
                    customerFullName={"Tersoo Hulugh"}
                    customerEmail={'thulugh@maxify.com'}
                    customerMobileNumber={"09099889384"}
                    amount={140348.39}
                    apiKey={"MK_TEST_X9PG275VR4"}
                    contractCode={"6256532644"}
                    reference={(10000000 + Math.floor(Math.random() * 47839402)).toString()}
                    tag="button"

                /> */}
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
                                <div className="badge badge-outline-info">Accepted</div>
                            </td>
                            <td>
                                <div onClick={handleShow} className="preview-thumbnail" style={{ cursor: 'pointer', backgroundColor: "#393", borderRadius: '50%', height: '20px', width: '20px', textAlign: 'center', lineHeight: '20px' }}>
                                    <MDIcon icon="mdi-cards" style={{ color: "#fff" }} />
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

    </div>)
}