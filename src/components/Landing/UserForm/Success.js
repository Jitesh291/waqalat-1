import React from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Typography, Link } from '@material-ui/core';

function Success(props) {
    return (
        <div style={{padding: '40px', 
                    borderRadius: '20px', 
                    width: '80%',
                    height: '100%',
                    boxShadow: '5px 10px 18px grey',}}>
            <AssignmentTurnedInIcon style={{fontSize: '100px'}} fontSize="large"/>
            <Typography variant='h3' gutterBottom>Success!</Typography>
            <Typography variant='h6' gutterBottom>You can download your document by clicking the link below.</Typography>
            {/* <Link>{props.upload.data.url.url}</Link> */}
            <Link>Test link</Link>
        </div>
    )
}

export default Success
