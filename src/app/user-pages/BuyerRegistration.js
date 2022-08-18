import bsCustomFileInput from 'bs-custom-file-input';
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class BuyerRegistration extends Component {

  componentDidMount() {
    bsCustomFileInput.init()
  }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0 h-100">
          <div className="row w-100 mx-0">
            <div className="col-lg-8 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <h1>CEFTER e-COM</h1>
                </div>
                <h4>Buyer Registration</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" id="exampleInputName1" placeholder="Phone Number" />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword2" placeholder="Password Confirmation" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard/buyer">SIGN UP</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/login" className="text-primary">Login</Link>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    <Link to="/register" className="text-primary">I am a farmer</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BuyerRegistration
