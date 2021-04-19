import React from 'react';
import './styles.css';
import Logo from './../../assets/logo.png';

const Header = (props) => {
    return (
        <header className = "headerComponent" data-test = "headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" data-test="logoIMG" src={Logo} alt="Logo"/>
                </div>
                test
            </div>
        </header>
    )

};

export default Header;