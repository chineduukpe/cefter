import React from "react";
import { MDIcon } from "../../components";

export default class AdminFarms extends React.Component{
    render(){
        return <div className="row">
            <div className="col-12">
                <h3> <MDIcon icon='mdi-account-multiple text-success' /> Farms</h3>
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
                        <th> Farm </th>
                        <th> Manager </th>
                        <th> Revenue </th>
                        <th> Location </th>
                        <th> Listings </th>
                        <th> Status </th>
                        <th> Insurance </th>
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
                        <td> Kator Farms Limited </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Hulugh Tersoo</span>
                          </div>
                        </td>
                        <td> NGN 23,203,493.88 </td>
                        <td> Vandekya </td>
                        <td> 8 </td>
                        <td>
                          <div className="badge badge-danger">Inctive</div>
                        </td>
                        <td>
                          <div className="badge badge-outline-danger badge-sm">Unverified</div>
                        </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
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
                        <td> Kator Farms Limited </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Hulugh Tersoo</span>
                          </div>
                        </td>
                        <td> NGN 23,203,493.88 </td>
                        <td> Vandekya </td>
                        <td> 8 </td>
                        <td>
                          <div className="badge badge-outline-warning">Suspended</div>
                        </td>
                        <td>
                          <div className="badge badge-outline-success badge-sm">Verified</div>
                        </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
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
                        <td> Kator Farms Limited </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Hulugh Tersoo</span>
                          </div>
                        </td>
                        <td> NGN 23,203,493.88 </td>
                        <td> Vandekya </td>
                        <td> 8 </td>
                        <td>
                          <div className="badge badge-success">Active</div>
                        </td>
                        <td>
                          <div className="badge badge-outline-success badge-sm">Verified</div>
                        </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
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
                        <td> Kator Farms Limited </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Hulugh Tersoo</span>
                          </div>
                        </td>
                        <td> NGN 23,203,493.88 </td>
                        <td> Vandekya </td>
                        <td> 8 </td>
                        <td>
                          <div className="badge badge-danger">Deactivated</div>
                        </td>
                        <td>
                          <div className="badge badge-outline-success badge-sm">Verified</div>
                        </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
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
                        <td> Kator Farms Limited </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Hulugh Tersoo</span>
                          </div>
                        </td>
                        <td> NGN 23,203,493.88 </td>
                        <td> Vandekya </td>
                        <td> 8 </td>
                        <td>
                          <div className="badge badge-danger">Inactive</div>
                        </td>
                        <td>
                          <div className="badge badge-outline-danger badge-sm">Unverified</div>
                        </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
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
                        <td> Kator Farms Limited </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Hulugh Tersoo</span>
                          </div>
                        </td>
                        <td> NGN 23,203,493.88 </td>
                        <td> Vandekya </td>
                        <td> 8 </td>
                        <td>
                          <div className="badge badge-success">Active</div>
                        </td>
                        <td>
                          <div className="badge badge-outline-success badge-sm">Verified</div>
                        </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
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
                        <td> Kator Farms Limited </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Hulugh Tersoo</span>
                          </div>
                        </td>
                        <td> NGN 23,203,493.88 </td>
                        <td> Vandekya </td>
                        <td> 8 </td>
                        <td>
                          <div className="badge badge-success">Active</div>
                        </td>
                        <td>
                          <div className="badge badge-outline-success badge-sm">Verified</div>
                        </td>
                        <td>
                            <MDIcon icon="mdi-delete text-danger" style={{fontSize: '14pt'}} /> 
                            <MDIcon icon="mdi-table-edit text-primary" style={{fontSize: '14pt'}}  /> 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    }
}