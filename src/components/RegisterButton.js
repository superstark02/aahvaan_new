import React from 'react'
import Button from '@material-ui/core/Button'
import { HashLink } from 'react-router-hash-link'

const RegisterButton = () => {
  return (
    <HashLink smooth to="/#register">
      <Button style={{border: '4px solid white', fontSize: '15px', fontWeight: '500', color: 'white'}} variant="outlined">REGISTER</Button>
    </HashLink>
  )
}

export default RegisterButton