import React from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Typography, Link } from '@material-ui/core';

function Success(props) {
    return (
        <div style={{padding: '40px', 
                    width: '80%',
                    height: '100%',
                    }}>
            <AssignmentTurnedInIcon style={{fontSize: '100px'}} fontSize="large"/>
            <Typography variant='h3' gutterBottom>Success!</Typography>
            <Typography variant='h6' gutterBottom>You can download your document by clicking the link below.</Typography>
            <Link style={{fontSize: '20px', cursor: 'pointer'}} onClick={()=> window.open(props.upload.response.data.url, "_blank")}>Click me</Link>
        </div>
    )
}

export default Success
