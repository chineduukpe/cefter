import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, MDIcon, PreviewItem, StretchCard, StretchCard2 } from '../components';




export class FarmerDashboard extends Component {

  transactionHistoryData = {
    labels: ["Farmers", "Buyers", "Agents"],
    datasets: [{
      data: [45, 35, 20],
      backgroundColor: [
        "#00d25b", "#ffab00", '#459038'
      ]
    }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render() {
    return (
      <div>
        <div className="row">
          <StretchCard
            variant="success"
            title="NGN 4,312,225.01"
            // growth='+13'
            subtitle="Total Sales Volume"
            icon={<MDIcon icon='mdi-cash-multiple' />}
          // size={2}
          />
          <StretchCard
            variant="warning"
            title="NGN 1,934,333.29"
            subtitle="Wallet Balance"
            icon={<MDIcon icon='mdi-cash-multiple' />}
          />
          <StretchCard
            variant="info"
            title="NGN 323,321"
            subtitle="This month"
            icon={<MDIcon icon='mdi-cash-multiple' />}
          />
          <StretchCard
            variant="danger"
            title="19"
            subtitle="Total orders"
            icon={<MDIcon icon='mdi-cart-outline' />}
          />

        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent farm sales</h4>
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
                        <th> Payment Mode </th>
                        <th> Date </th>
                        <th> Status </th>
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
                            <img src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> 02312 </td>
                        <td> <del>N</del> 14,500 </td>
                        <td> Rice </td>
                        <td> Card </td>
                        <td> 04 Feb 2022 </td>
                        <td>
                          <div className="badge badge-outline-info">Ordered</div>
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
                            <img src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> 02312 </td>
                        <td>  <del>N</del> 14,500 </td>
                        <td> Soya Beans </td>
                        <td> Card </td>
                        <td> 13 Feb 2022 </td>
                        <td>
                          <div className="badge badge-outline-warning">Dispatched</div>
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
                            <img src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> 02312 </td>
                        <td> <del>N</del> 14,500 </td>
                        <td> Sesame </td>
                        <td> Card </td>
                        <td> 04 Feb 2022 </td>
                        <td>
                          <div className="badge badge-outline-warning">Dispatched</div>
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
                            <img src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Chinedu Ukpe</span>
                          </div>
                        </td>
                        <td> 02312 </td>
                        <td> <del>N</del> 14,500 </td>
                        <td> Soya Beans </td>
                        <td> Card </td>
                        <td> 04 Feb 2022 </td>
                        <td>
                          <div className="badge badge-outline-success">Received</div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={8}>
                          <div className="form-check form-check-muted m-0">
                            <Link to='/farmer/orders'><Button>More Orders</Button></Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FarmerDashboard;