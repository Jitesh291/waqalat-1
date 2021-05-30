import React, { Component } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import './Home.css'
import ServiceCards from './ServiceCards';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className='page-1'>
                <nav>
                <div className='top-menu'>
                    <ul className='category-list'>
                        <li className='category-list-item'><div>Real Estate</div>
                            <ul className="dropdown">
                                <li className="dropdown-item">Sub-1</li>
                                <li className="dropdown-item">Sub-2</li>
                                <li className="dropdown-item">Sub-3</li>
                            </ul>
                        </li>
                        <li className='category-list-item'><div>Business</div>
                            <ul className="dropdown">
                                <li className="dropdown-item">Sub-1</li>
                                <li className="dropdown-item">Sub-2</li>
                                <li className="dropdown-item">Sub-3</li>
                            </ul>
                        </li>
                        <li className='category-list-item'><div>Financial</div>
                            <ul className="dropdown">
                                <li className="dropdown-item">Sub-1</li>
                                <li className="dropdown-item">Sub-2</li>
                                <li className="dropdown-item">Sub-3</li>
                            </ul>
                        </li>
                        <li className='category-list-item'><div>Family</div>
                            <ul className="dropdown">
                                <li className="dropdown-item">Sub-1</li>
                                <li className="dropdown-item">Sub-2</li>
                                <li className="dropdown-item">Sub-3</li>
                            </ul>
                        </li>
                        <li className='category-list-item'><div>All</div>
                            <ul className="dropdown">
                                <li className="dropdown-item">Sub-1</li>
                                <li className="dropdown-item">Sub-2</li>
                                <li className="dropdown-item">Sub-3</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </nav>
                <div className='hero-image-container'>
                    <Typography variant='h3'>Free Legal Documents</Typography>
                    <Typography variant='h5' style={{'color': '#8B4B34'}}>Print or download your customized legal document in 5-10 minutes.</Typography>
                    <div className='search-bar'>
                        
                            <TextField variant="outlined" className='search-field' type='search' size='small'/>  
                        
                        <button className='search-btn'>SEARCH</button>
                    </div>
                    <div className='customer-rating'>
                    <Typography>Our customers say Excellent 4.6 out of 5 stars</Typography>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size='large' />
                    </div>
                    <img src='./heroImage.png' alt='home page vector' className='hero-image'/>
                </div>
                
            </div>
            <div className='page-2'><ServiceCards /></div>
            
            </React.Fragment>
        )
    }
}