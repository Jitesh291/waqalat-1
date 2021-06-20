import React from 'react'
import { Typography, Link, Button } from '@material-ui/core'

function UserDropdown (props) {
  const resetCustomer = () => {
    props.resetSignIn();
    localStorage.removeItem('auth_token');
    props.history.push('/')
  }
  return <div className=''>
      <Typography>
        <Link>{props.user.login}</Link>
      </Typography>
      <Button variant='outlined' onClick={()=> resetCustomer()}>Sign Out</Button>
  </div>
}

export default UserDropdown
