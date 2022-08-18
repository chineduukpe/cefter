import React from 'react';
import MDIcon from '../MDIcon/MDIcon';

const StretchCard2 = ({
    icon = <MDIcon icon='mdi-codepen' />,
    title="",
    subtitle="",
    content="",
    growth="",
    variant="success"
}) => {
    return (
        <div className="col-sm-4 grid-margin">
            <div className="card">
                <div className="card-body">
                <h5>{title}</h5>
                <div className="row">
                    <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                        <h2 className="mb-0">{content}</h2>
                        <p className={`text-${variant} ml-2 mb-0 font-weight-medium`}>{growth}</p>
                    </div>
                    <h6 className="text-muted font-weight-normal">{subtitle}</h6>
                    </div>
                    <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    {icon}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default StretchCard2;