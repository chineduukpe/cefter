import React, { useState } from "react"
import { MonnifyButton } from "react-monnify";

const Checkout = () => {
    const [haveDispatcher, setHaveDispatcher] = useState(false);

    return (
        <div class="container">

            <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0 text-primary">Rice 30 tons</h6>
                                <small class="text-muted">Kator Farms</small>
                            </div>
                            <span class="text-muted">24,3004.03</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0 text-primary">Beans 58 kg</h6>
                                <small class="text-muted">Chinedu Farms</small>
                            </div>
                            <span class="text-muted">89,303.34</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0 text-primary">Cocoa Butter</h6>
                                <small class="text-muted">Chinedu Farms</small>
                            </div>
                            <span class="text-muted">45,394.33</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span className="text-success">Total (NGN)</span>
                            <strong className="text-success">1,304,039.38</strong>
                        </li>
                    </ul>

                    {/* <form class="card p-2">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Promo code" />
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form> */}
                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" novalidate >
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" value="Tersoo" id="firstName" placeholder="" required />
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName" value="Hulugh" placeholder="" required />
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email">Email <span class="text-muted">(Optional)</span></label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="state">State</label>
                                <select class="custom-select d-block w-100" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>Abuja</option>
                                    <option>Benue</option>
                                    <option>Niger</option>
                                    <option>Sokoto</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required />
                                <div class="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <hr class="mb-4" />
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="same-address" />
                            <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                onChange={() => setHaveDispatcher(prev => !prev)}
                                checked={haveDispatcher}
                                id="save-info" />
                            <label class="custom-control-label" for="save-info">I have a dispatcher</label>
                        </div>
                        {!haveDispatcher ? <div class="custom-control custom-checkbox">
                            <label for="state">Select Dispatcher</label>
                            <select class="custom-select d-block w-100" id="state" required>
                                <option value="">Choose...</option>
                                <option>UPS</option>
                                <option>Savour Logistics</option>
                                <option>Zartech Logistics</option>
                                <option>Slim Operations</option>
                            </select>
                        </div> : null}
                        <hr class="mb-4" />
                        <MonnifyButton
                            text="Make Payment"
                            className="btn btn-primary btn-lg btn-block"
                            onComplete={(onComplete) => null}
                            close={(onClose) => null}
                            disabled={true}
                            embed={true}
                            customerFullName={"Tersoo Hulugh"}
                            customerEmail={'thulugh@maxify.com'}
                            customerMobileNumber={"09099889384"}
                            amount={130403938}
                            apiKey={"MK_TEST_X9PG275VR4"}
                            contractCode={"6256532644"}
                            reference={(10000000 + Math.floor(Math.random() * 47839402)).toString()}
                            tag="button"

                        />
                        {/* <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout;