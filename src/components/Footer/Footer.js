import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            
            <div className='footer-container'>
                <div className='footer-logos'>
                    <img src='./Waqalat_White.png' className='company-logo'></img>
                    <div className='social-media-logos'></div>
                </div>
                <div className='footer-nav-links'>
                    2
                </div>
                <div className='footer-program-links'>
                    3
                </div>
                <div className='footer-country-stickers'>
                    4
                </div>
            </div>
        );
    }
}

export default Footer;