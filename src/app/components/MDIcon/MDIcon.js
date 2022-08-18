import React from 'react';

const MDIcon = ({
    icon='',
    ...rest
}) => {
    return <i {...rest} className={`mdi ${icon}`}></i>
}

export default MDIcon;