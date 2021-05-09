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
                <div className='top-menu'>
                    <ul className='category-list'>
                        <li className='category-list-item'>Real Estate</li>
                            <ul className="dropdown">
                                <li>Sub-1</li>
                                <li>Sub-2</li>
                                <li>Sub-3</li>
                            </ul>
                        <li className='category-list-item'>Business</li>
                        <li className='category-list-item'>Financial</li>
                        <li className='category-list-item'>Family</li>
                        <li className='category-list-item'>All</li>
                    </ul>
                </div>
                <div className='hero-image-container'>
                    <Typography variant='h3'>Free Legal Documents</Typography>
                    <Typography variant='h5' style={{'color': '#8B4B34'}}>Print or download your customized legal document in 5-10 minutes.</Typography>
                    <div className='search-bar'>
                        <div className='search-box'>
                            <TextField variant="outlined" style={{'height': '50px','float': 'left'}} />
                            <Button style={{'backgroundColor':'#facf43', 'color': 'azure', 'height': '30px', 'float': 'right', 'padding': '5px'}}>SEARCH</Button>
                        </div>
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
// style={{'clear': 'right','padding': '20px', 'width': '500px', 'z-index': '2','position': 'absolute'}}