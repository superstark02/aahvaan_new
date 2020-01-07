import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'

const TokenDisplay = () => {
  const useStyles = makeStyles(() => ({
    content: {
      display: 'flex',
      alignContent: 'space-around',
      width: '80vw',
      marginLeft: '10vw',
      fontSize: '30px',
      lineHeight: '50px',
      textAlign: 'center',
      border: '2px solid gray',
    },
    // oneLiner: {
    //   display: 'flex',

    // },
    tokenBox: {
      width: '40vw',
      border: '3px solid black',
      borderRadius: '5px',
    },
  }))

  const classes = useStyles();

  const tokenNumber = 'HDJSHWU2383'
  return (
    <React.Fragment>
      <h1 align="center" style={{backgroundColor: 'black', color: 'white', padding: '5px 0px 5px 0px'}}>
        <Button component={ Link } to="/" variant="contained" style={{backgroundColor: 'black', color: 'white', border: '2px solid white'}}>
          Home
        </Button>
      </h1>
      <br />
      <br />
      <br />
      <div className={classes.content}>
        <p>Token Number:</p>
        <p className={classes.tokenBox}>{tokenNumber}</p>
        <CopyToClipboard text={tokenNumber}>
          <Button variant="outlined" color="primary" style={{fontSize: '30px', padding: '10px', width: '10vw',}}>
            <FontAwesomeIcon icon={faCopy} />
          </Button>
        </CopyToClipboard>
      </div>
    </React.Fragment>
  )
}

export default TokenDisplay