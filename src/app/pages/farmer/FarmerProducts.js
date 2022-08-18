import React from "react";
import { Button, MDIcon } from "../../components";

export default class FarmerProducts extends React.Component {
    render() {
        return <div className="row">
            <div className="col-12">
                <h3> <MDIcon icon='mdi-table-large text-success' /> My Products - Chinedu Farms Limited</h3>
                <h6> 22 Idumota read, Gboko, Benue State</h6>
            </div>
            <div className="col-sm-12">
                <Button>Add Product <MDIcon icon='md-plus' /> </Button>
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
                                <th> Product </th>
                                <th> Available Quantity </th>
                                <th> Unit </th>
                                <th> Cost/unit </th>
                                <th> Location </th>
                                <th> Registration Date </th>
                                <th> Actions </th>
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
                                        <img src='/img/products/rice.jpeg' alt="face" />
                                        <span className="pl-2">Rice</span>
                                    </div>
                                </td>
                                <td> 23 </td>
                                <td> tons </td>
                                <td> 23,000 </td>
                                <td> Gboko </td>
                                <td> 22-03-2019 </td>
                                <td>
                                    <MDIcon icon="mdi-delete text-danger" style={{ fontSize: '14pt' }} />
                                    <MDIcon icon="mdi-table-edit text-primary" style={{ fontSize: '14pt' }} />

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
                                        <img src='/img/products/beans.webp' alt="face" />
                                        <span className="pl-2">Beans</span>
                                    </div>
                                </td>
                                <td> 23 </td>
                                <td> tons </td>
                                <td> 23,000 </td>
                                <td> Gboko </td>
                                <td> 22-03-2019 </td>
                                <td>
                                    <MDIcon icon="mdi-delete text-danger" style={{ fontSize: '14pt' }} />
                                    <MDIcon icon="mdi-table-edit text-primary" style={{ fontSize: '14pt' }} />

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
                                        <img src='/img/products/beans.webp' alt="face" />
                                        <span className="pl-2">Soya</span>
                                    </div>
                                </td>
                                <td> 23 </td>
                                <td> tons </td>
                                <td> 23,000 </td>
                                <td> Gboko </td>
                                <td> 22-03-2019 </td>
                                <td>
                                    <MDIcon icon="mdi-delete text-danger" style={{ fontSize: '14pt' }} />
                                    <MDIcon icon="mdi-table-edit text-primary" style={{ fontSize: '14pt' }} />

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
                                        <img src='/img/products/rice.jpeg' alt="face" />
                                        <span className="pl-2">Rice</span>
                                    </div>
                                </td>
                                <td> 23 </td>
                                <td> tons </td>
                                <td> 23,000 </td>
                                <td> Gboko </td>
                                <td> 22-03-2019 </td>
                                <td>
                                    <MDIcon icon="mdi-delete text-danger" style={{ fontSize: '14pt' }} />
                                    <MDIcon icon="mdi-table-edit text-primary" style={{ fontSize: '14pt' }} />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}