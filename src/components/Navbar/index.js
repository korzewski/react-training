import React from 'react';

const Navbar = (props) => {
    const {title, changeThemeHandle} = props;
    
    return (
        <div className="navbar" onClick={changeThemeHandle}>
            Navbar: {title}
        </div>
    )
}

export default Navbar;