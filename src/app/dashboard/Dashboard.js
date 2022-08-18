import React, { Component } from 'react';
import { Doughnut, Line, Pie } from 'react-chartjs-2';
import Slider from "react-slick";
import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap"
import { MDIcon, PreviewItem, StretchCard, StretchCard2 } from '../components';

const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}



export class Dashboard extends Component {

  transactionHistoryData =  {
    labels: ["Farmers", "Buyers","Agents"],
    datasets: [{
        data: [ 45, 35, 20],
        backgroundColor: [
          "#00d25b","#ffab00", '#459038'
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


    areaData = {
        labels: ["Jan","Feb","Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: 'Transaction volume over period',
          data: [12, 19, 3, 5, 2, 3,9],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(112, 182, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(95, 132, 192, 1)',
          ],
          borderWidth: 1,
          fill: true, // 3: no fill
        }]
    };

    areaOptions = {
        plugins: {
          filler: {
            propagate: true
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              color: "rgba(204, 204, 204,0.1)"
            }
          }],
          xAxes: [{
            gridLines: {
              color: "rgba(204, 204, 204,0.1)"
            }
          }]
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
  render () {
    return (
      <div>
        <div className="row">
          <StretchCard 
            variant="success"
            title="NGN 234,382,345.38"
            growth='+23'
            subtitle="Total Volume"
            size={2}
          />
          <StretchCard 
            variant="warning"
            title="234,348"
            subtitle="Active Users"
            icon={<MDIcon icon='mdi-account-multiple-outline' />}
          />
          <StretchCard 
            variant="info"
            title="23,321"
            subtitle="Available Farms"
            icon={<MDIcon icon='mdi-home-map-marker' />}
          />
          <StretchCard 
            variant="danger"
            title="430"
            subtitle="Agents"
            icon={<MDIcon icon='mdi-account-multiple-outline' />}
            />
          <StretchCard 
            variant="warning"
            title="3,405"
            subtitle="Products sales count"
            icon={<MDIcon icon='mdi-cart-plus' />}
            />
          <StretchCard 
            variant="success"
            title="NGN 1,233,193"
            growth='+10'
            subtitle="This Month Volume"
          />
          <StretchCard 
            variant="warning"
            title="2,203"
            // growth='+10'
            subtitle="Total Orders"
          />
      
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Ratio of Sellers to Buyers</h4>
                <div className="aligner-wrapper">
                  <Doughnut data={this.transactionHistoryData} options={this.transactionHistoryOptions} />
                  <div className="absolute center-content">
                    <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">234,326</h5>
                    <p className="text-small text-muted text-center mb-0">Total</p>
                  </div>
                </div>  
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Buyers</h6>
                    <p className="text-muted mb-0">169,384 Active</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">187,394</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Farmers</h6>
                    <p className="text-muted mb-0">43,392 Active</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">40,221</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Agents</h6>
                    <p className="text-muted mb-0">430 Active</p>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">430</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-1">Top five farms</h4>
                  <p className="text-muted mb-1">Volume</p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="preview-list">

                      <PreviewItem 
                        icon={<MDIcon icon="mdi-highway" />}
                        title="Farmer: Chinedu Ukpe"
                        subtitle='Farm: Hajina Farms Limited'
                        variant="primary"
                        content={
                          <>
                            <p className="text-muted mb-0"> _</p>
                            <p className="text-muted mb-0">NGN 12,303.59 </p>
                          </>
                        }
                      />

                      <PreviewItem 
                        icon={<MDIcon icon="mdi-highway" />}
                        title="Agent: Tersoo Hulugh"
                        subtitle='Farm: Hulugh Farms Limited'
                        variant="success"
                        content={
                          <>
                            <p className="text-muted mb-0"> _</p>
                            <p className="text-muted mb-0">NGN 343,303.54 </p>
                          </>
                        }

                      />

                      <PreviewItem 
                        icon={<MDIcon icon="mdi-highway" />}
                        title="Farmer: Alex Piper"
                        subtitle='Farm: PPA Investment Limited'
                        variant="success"
                        content={
                          <>
                            <p className="text-muted">_</p>
                            <p className="text-muted mb-0">NGN 343,303.54 </p>
                          </>
                        }

                      />

                      <PreviewItem 
                        icon={<MDIcon icon="mdi-highway" />}
                        title="Agent: Tersoo Hulugh"
                        subtitle='Farm: Kator Farms Limited'
                        variant='danger'
                        content={
                          <>
                            <p className="text-muted">_</p>
                            <p className="text-muted mb-0">NGN 343,303.54 </p>
                          </>
                        }
                      />

                      <PreviewItem 
                        icon={<MDIcon icon="mdi-highway" />}
                        title="Agent: Tersoo Hulugh"
                        subtitle='Farm: Adewunmi Farms'
                        content={
                          <>
                            <p className="text-muted">_</p>
                            <p className="text-muted mb-0">NGN 343,303.54 </p>
                          </>
                        }
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <StretchCard2 
            content='$45,850'
            subtitle='some sales'
            icon={<MDIcon icon="icon-lg mdi-wallet-travel text-success ml-auto" />}
            title="Sales Part"
            growth='+23'
          /> */}
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12'>
              <Line data={this.areaData} options={this.areaOptions} />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title">Messages</h4>
                  <p className="text-muted mb-1 small">View all</p>
                </div>
                <div className="preview-list">
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face6.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Leonard</h6>
                          <p className="text-muted text-small">5 minutes ago</p>
                        </div>
                        <p className="text-muted">Well, it seems to be working now.</p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face8.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Luella Mills</h6>
                          <p className="text-muted text-small">10 Minutes Ago</p>
                        </div>
                        <p className="text-muted">Well, it seems to be working now.</p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face9.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Ethel Kelly</h6>
                          <p className="text-muted text-small">2 Hours Ago</p>
                        </div>
                        <p className="text-muted">Please review the tickets</p>
                      </div>
                    </div>
                  </div>
                  <div className="preview-item border-bottom">
                    <div className="preview-thumbnail">
                      <img src={require('../../assets/images/faces/face11.jpg')} alt="face" className="rounded-circle" />
                    </div>
                    <div className="preview-item-content d-flex flex-grow">
                      <div className="flex-grow">
                        <div className="d-flex d-md-block d-xl-flex justify-content-between">
                          <h6 className="preview-subject">Herman May</h6>
                          <p className="text-muted text-small">4 Hours Ago</p>
                        </div>
                        <p className="text-muted">Thanks a lot. It was easy to fix it .</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Portfolio Slide</h4>
                <Slider className="portfolio-slider" {...this.sliderSettings}>
                  <div className="item">
                    <img src={require('../../assets/images/dashboard/Rectangle.jpg')} alt="carousel-item" />
                  </div>
                  <div className="item">
                    <img src={require('../../assets/images/dashboard/Img_5.jpg')} alt="carousel-item" />
                  </div>
                  <div className="item">
                    <img src={require('../../assets/images/dashboard/img_6.jpg')} alt="carousel-item" />
                  </div>
                </Slider>
                <div className="d-flex py-4">
                  <div className="preview-list w-100">
                    <div className="preview-item p-0">
                      <div className="preview-thumbnail">
                        <img src={require('../../assets/images/faces/face12.jpg')} className="rounded-circle" alt="face" />
                      </div>
                      <div className="preview-item-content d-flex flex-grow">
                        <div className="flex-grow">
                          <div className="d-flex d-md-block d-xl-flex justify-content-between">
                            <h6 className="preview-subject">CeeCee Bass</h6>
                            <p className="text-muted text-small">4 Hours Ago</p>
                          </div>
                          <p className="text-muted">Well, it seems to be working now.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted">Well, it seems to be working now. </p>
                <div className="progress progress-md portfolio-progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">To do list</h4>
                <TodoListComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Visitors by Countries</h4>
                <div className="row">
                  <div className="col-md-5">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-us"></i>
                            </td>
                            <td>USA</td>
                            <td className="text-right"> 1500 </td>
                            <td className="text-right font-weight-medium"> 56.35% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-de"></i>
                            </td>
                            <td>Germany</td>
                            <td className="text-right"> 800 </td>
                            <td className="text-right font-weight-medium"> 33.25% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-au"></i>
                            </td>
                            <td>Australia</td>
                            <td className="text-right"> 760 </td>
                            <td className="text-right font-weight-medium"> 15.45% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-gb"></i>
                            </td>
                            <td>United Kingdom</td>
                            <td className="text-right"> 450 </td>
                            <td className="text-right font-weight-medium"> 25.00% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-ro"></i>
                            </td>
                            <td>Romania</td>
                            <td className="text-right"> 620 </td>
                            <td className="text-right font-weight-medium"> 10.25% </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="flag-icon flag-icon-br"></i>
                            </td>
                            <td>Brasil</td>
                            <td className="text-right"> 230 </td>
                            <td className="text-right font-weight-medium"> 75.00% </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div id="audience-map" className="vector-map"></div>
                    <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent" //change it to ocean blue: #0077be
                    panOnDrag={true}
                    containerClassName="dashboard-vector-map"
                    focusOn= { {
                      x: 0.5,
                      y: 0.5,
                      scale: 1,
                      animate: true
                    }}
                    series={{
                      regions: [{
                        scale: ['#3d3c3c', '#f2f2f2'],
                        normalizeFunction: 'polynomial',
                        values: mapData
                      }]
                    }}
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div> 
    );
  }
}

export default Dashboard;