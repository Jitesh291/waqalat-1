import React from 'react'
import { Typography, Link } from '@material-ui/core'

function UserDropdown (props) {
  return <div className=''>
      <Typography>
        <Link>{props.user.login}</Link>
      </Typography>
  </div>
}

export default UserDropdown
