import React from 'react'
import PropTypes from 'prop-types'


 const Header=(props)=> {
     const {branding}=props;
    return (
        <div>
            <h1 style={headingStyle}>{branding}</h1>
        </div>
    )
}

Header.defaulProps={
    branding:'MyApp'
};

Header.propTypes={
    branding:PropTypes.string.isRequired
}
const headingStyle={color:'red',fontSize:'50px'};
export default Header;
