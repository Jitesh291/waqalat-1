import React, { Component } from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
            <div className='footer-container'>
                <div className='footer-logos'>
                    <img src='./Waqalat_White.png' className='company-logo' alt='comapny logo'></img>
                    <div className='social-media-logos'>
                        <FacebookIcon className='sm-logo'/>
                        <TwitterIcon className='sm-logo'/>
                        <LinkedInIcon className='sm-logo'/>
                    </div>
                </div>
                <div className='footer-nav-links'>
                    <Link to='/' className='footer-link'>Home</Link>
                    <Link to='/' className='footer-link'>About</Link>
                    <Link to='/' className='footer-link'>Contact</Link>
                    <Link to='/' className='footer-link'>Help</Link>
                </div>
                <div className='footer-program-links'>
                    
                </div>
                <div className='footer-country-stickers'>
                    
                </div>
            </div>
            <div className='footer-tc'>
                Your use of this site is subject to our Terms of Use, Disclaimer, Privacy Policy. LawDepot® is not a law firm and cannot provide legal advice. We provide information and software and you are responsible for appropriately using this material. ©2002-2021 LawDepot® (Sequiter Inc.). All Rights Reserved.
            </div>
            </React.Fragment>
        );
    }
}

export default Footer;