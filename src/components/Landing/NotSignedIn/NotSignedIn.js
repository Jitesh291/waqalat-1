import React from 'react'
import { Typography } from '@material-ui/core'

export default function NotSignedIn() {
    return (
        <div style={{height: '50vh', padding: '40px'}}>
            <Typography variant='h4' style={{padding: '40px',boxShadow: '0 6px 10px rgba(0,0,0,0.15)'}}>Looks like you haven't logged in. Please sign in using your credentials.</Typography>
        </div>
    )
}
