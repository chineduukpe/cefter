import React from 'react';
const Button = ({children, value="", icon="", className="", variant="primary", ...rest}) => {
    return <button className={`btn btn-${variant} btn-fw ${className}`} {...rest}>
        {value} {children} {icon}
    </button>
}

export default Button;