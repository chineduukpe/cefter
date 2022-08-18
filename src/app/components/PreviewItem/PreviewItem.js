import React from 'react';

const PreviewItem = ({
    icon = '',
    title = "",
    subtitle="",
    content="",
    variant='info'
}) => {
    return (
        <div className="preview-item border-bottom">
            <div className="preview-thumbnail">
                <div className={`preview-icon bg-${variant}`}>
                    {icon}
                </div>
            </div>
            <div className="preview-item-content d-sm-flex flex-grow">
                <div className="flex-grow">
                <h6 className="preview-subject">{title}</h6>
                <p className="text-muted mb-0">{subtitle}</p>
                </div>
                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default PreviewItem;