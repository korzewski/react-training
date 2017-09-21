import React from 'react';

const Navbar = (props) => {
    const {title} = props;
    
    return (
        <div className="navbar">
            Navbar: {title}
        </div>
    )
}

export default Navbar;