import React from "react";
import { MDIcon } from "../../components";

export default class AdminUsers extends React.Component{
    render(){
        return <div className="row">
            <div className="col-12">
                <h3> <MDIcon icon='mdi-account-multiple text-success' /> Users</h3>
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
                        <th> Name </th>
                        <th> Email </th>
                        <th> Phone </th>
                        <th> Account Type </th>
                        <th> Status </th>
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
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> chinedu_ukpe@outlook.com </td>
                        <td> 09033448595 </td>
                        <td> Farmer </td>
                        <td>
                          <div className="badge badge-success">Active</div>
                        </td>
                        <td> 22-03-2022 </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
                            <MDIcon icon="mdi-account text-primary" style={{fontSize: '14pt'}}  /> 
                            -
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
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> chinedu_ukpe@outlook.com </td>
                        <td> 09033448595 </td>
                        <td> Agent </td>
                        <td>
                          <div className="badge badge-danger">Inactive</div>
                        </td>
                        <td> 22-03-2022 </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
                            <MDIcon icon="mdi-account text-primary" style={{fontSize: '14pt'}}  /> 
                            -
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
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> chinedu_ukpe@outlook.com </td>
                        <td> 09033448595 </td>
                        <td> Buyer </td>
                        <td>
                          <div className="badge badge-success">Active</div>
                        </td>
                        <td> 22-03-2022 </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
                            <MDIcon icon="mdi-account text-primary" style={{fontSize: '14pt'}}  /> 
                            -
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
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> chinedu_ukpe@outlook.com </td>
                        <td> 09033448595 </td>
                        <td> Agent </td>
                        <td>
                          <div className="badge badge-success">Active</div>
                        </td>
                        <td> 22-03-2022 </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
                            <MDIcon icon="mdi-account text-primary" style={{fontSize: '14pt'}}  /> 
                            -
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
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> chinedu_ukpe@outlook.com </td>
                        <td> 09033448595 </td>
                        <td> Farmer </td>
                        <td>
                          <div className="badge badge-outline-warning">Suspended</div>
                        </td>
                        <td> 22-03-2022 </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
                            <MDIcon icon="mdi-account text-primary" style={{fontSize: '14pt'}}  /> 
                            -
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
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> chinedu_ukpe@outlook.com </td>
                        <td> 09033448595 </td>
                        <td> Farmer </td>
                        <td>
                          <div className="badge badge-success">Active</div>
                        </td>
                        <td> 22-03-2022 </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
                            <MDIcon icon="mdi-account text-primary" style={{fontSize: '14pt'}}  /> 
                            -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    }
}