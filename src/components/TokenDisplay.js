import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import { Link } from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const useStyles = makeStyles(theme => ({
  paper:{
    height:'auto',
    width:'auto',
    marginTop:10,
    padding:'2vh',
    textAlign: 'center',
  },
  token:{
    border:'dashed',
    borderWidth:'0.2vh',
    borderColor:'black',
    backgroundColor:'#c5eff7',
    borderRadius:2,
    align:'center',
    padding:8,
  },
  congratulations:{
    margin:0,
    marginTop:10,
  },
  navBar:{
    width:'100%',
    height:'10vh',
    backgroundColor:'black',
    margin:0,
    color:'white',
    fontSize:'2vw'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  const tokenNumber = 'TOKEN NUMBER'    // Store the token number.

  return (
    <React.Fragment>
      <div className={classes.navBar}>
        <h1 align="center" style={{backgroundColor: 'black', color: 'white', padding: '5px 0px 5px 0px'}}>
          <Button component={ Link } to="/" variant="contained" style={{backgroundColor: 'black', color: 'white'}}>
            <HomeRoundedIcon fontSize='large' />
          </Button>
        </h1>
      </div>
      <br />
      <br />
      <br />
      <Container maxWidth="sm">
      <Typography component="div">
        <Paper elevation={3} className={classes.paper}>
          <h4 className={classes.congratulations}>CONGRATULATIONS!!!</h4>
          <p className={classes.congratulations}>You have been successfully registered.</p>
          <hr width='100%' align="center" color='lightgrey'></hr>
          <p>Below is your unique token number. Kindly save it for future reference.</p>
          <h2 className={classes.token} align='center'>{tokenNumber}</h2>
          <CopyToClipboard text={tokenNumber}>
            <Button variant="contained" style={{backgroundColor: '#4EDB24', color: 'white', marginTop: '10px'}}>
              <FileCopyOutlinedIcon />&nbsp;COPY
            </Button>
          </CopyToClipboard>
        </Paper>
      </Typography>
      </Container>
    </React.Fragment>
  );
}
