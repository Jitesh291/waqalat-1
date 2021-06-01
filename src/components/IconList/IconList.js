import React from 'react'
import { Typography } from '@material-ui/core';
import './IconList.css';
import file from '../../assets/file.png';
import lock from '../../assets/lock.png';
import support from '../../assets/support.png';

function IconList() {
    return (
        <div className='icon-container'>
            <div className='row'>
                <div className='col'><img src={file} alt='file folder icon' style={{width: '40px', padding: '5px'}}/></div>
                <div className='col'><Typography variant='h6'>Create and save unlimited legal documents</Typography></div>
            </div>
            <div className='row'>
                <div className='col'><img src={lock} alt='lock folder icon' style={{width: '50px'}}/></div>
                <div className='col'><Typography variant='h6'>Never lose your work</Typography></div>
            </div>
            <div className='row'>
                <div className='col'><img src={support} alt='file folder icon' style={{width: '50px'}}/></div>
                <div className='col'><Typography variant='h6'>Free Technical support</Typography></div>
            </div>
        </div>
    )
}

export default IconList
