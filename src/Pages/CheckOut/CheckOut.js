import React, { Component } from "react";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
// import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-header">
                  <IconEnvelope className="i-va" /> Contact Info
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile no"
                        aria-label="Mobile no"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconTruck className="i-va" /> Shipping Infomation
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Addresss"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Country --</option>
                        <option>Nepal</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Province --</option>
                        <option>3</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconReceipt className="i-va" /> Billing Infomation
                  <div className="form-check form-check-inline ml-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Same as Shipping Infomation
                    </label>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Addresss"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address 2 (Optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Country --</option>
                        <option>United States</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- State --</option>
                        <option>California</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconCreditCard2Front className="i-va" /> Payment Method
                </div>
                <div className="card-body">
                  <div className="row g-3 mb-3 border-bottom">
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          className="form-check-input"
                          defaultChecked
                          required
                        />
                        <label className="form-check-label" htmlFor="credit">
                          Credit card
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          className="form-check-input"
                          required
                        />
                        <label className="form-check-label" htmlFor="paypal">
                          PayPal
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name on card"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Card number"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Expiration month"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Expiration year"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer" style={{textAlign: "center"}}>
                  <button type="button" className="btn btn-block" style={{backgroundColor: '#198754', borderRadius: '25px'}}>
                    Pay Now <strong>Npr. XXXXX</strong>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                <h6 className="my-0">Items In Cart <span className="badge bg-secondary float-right">2</span></h6>
                  
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product Title</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">Npr. XXXXXX</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product Title</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">Npr. XXXXXX</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Grand Total</span>
                    <strong>Npr. XXXXXX</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutView;
