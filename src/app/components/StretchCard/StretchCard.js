import React from 'react';
import MDIcon from '../MDIcon/MDIcon';

const StretchCard = ({
    title = '',
    subtitle = '',
    growth = '',
    icon = <MDIcon icon='mdi-arrow-top-right' />,
    variant='success',
    size=1,
}) => {
    return (
        <div className={`col-xl-${3 * Math.floor(size)} col-sm-${6 * Math.floor(size)} grid-margin stretch-card`}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">{title}</h3>
                      <p className={`text-${variant} ml-2 mb-0 font-weight-medium`}>{growth}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={`icon icon-box-${variant} `}>
                      {icon}
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">{subtitle}</h6>
              </div>
            </div>
        </div>
    )
}

export default StretchCard;