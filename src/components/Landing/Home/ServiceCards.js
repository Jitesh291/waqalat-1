import React from 'react'
import { serviceHeadings } from '../../../configuration/homepage/services';
import { Card, CardContent, Typography, Link } from '@material-ui/core';
import './ServiceCards.css';

function ServiceCards() {
    return (
        <div className='service-card-container'>
            <div className='service-cards-heading'><Typography variant='h3'>Legal Documents, Forms, and Contracts</Typography></div>
            
            <div className='row'>
                {
                Object.keys(serviceHeadings)
                .map((key)=>{
                    return <Card key={key} index={key} className='column'>
                        <CardContent>
                            <Typography variant='h6'>{key}</Typography>
                            <ul style={{listStyleType: 'none'}}>
                                {
                                Object.keys(serviceHeadings[key]).map(i=>{
                                return <li style={{marginBottom: '10px'}} key={i}><Link style={{textDecoration: 'none', color: 'var(--darkGrey)'}}>{serviceHeadings[key][i]}</Link></li>
                                })
                                }
                            </ul>
                        </CardContent>
                    </Card>
                })
                }
            </div>
        </div>
    )
}

export default ServiceCards
