import React from 'react'
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
import { Typography } from '@material-ui/core';
import './IconList.css';

function IconList() {
    return (
        <div className='icon-container'>
            <div className='row'>
                <div className='col'><FileCopyRoundedIcon color="secondary"  style={{ fontSize: 40}}/></div>
                <div className='col'><Typography variant='h6'>Create and save unlimited legal documents</Typography></div>
            </div>
            <div className='row'>
                <div className='col'><LockRoundedIcon color="secondary"  style={{ fontSize: 40}}/></div>
                <div className='col'><Typography variant='h6'>Never lose your work</Typography></div>
            </div>
            <div className='row'>
                <div className='col'><PermPhoneMsgRoundedIcon color="secondary"  style={{ fontSize: 40}}/></div>
                <div className='col'><Typography variant='h6'>Free Technical support</Typography></div>
            </div>
        </div>
    )
}

export default IconList
