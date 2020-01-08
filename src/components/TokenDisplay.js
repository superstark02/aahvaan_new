import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root:{
    margin:0,
    padding:0,
  },
  paper:{
    height:'auto',
    width:'auto',
    marginTop:10,
    padding:'2vh',
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
    paddingTop:15,
    fontSize:'2vw'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.navBar} align='center'>
        HOME
      </div>
      <CssBaseline />
      <Container maxWidth="sm">
      <Typography component="div">
        <Paper elevation={3} className={classes.paper}>
          <h4 className={classes.congratulations}>CONGRATULATIONS!!!</h4>
          <p className={classes.congratulations}>You have been successfully registered.</p>
          <hr width='80%' align="center" color='lightgrey'></hr>
          <p align='center'>This token number is mailed to your registered e-mail ID</p>
          <h2 className={classes.token} align='center'>TOKEN NUMBER</h2>
        </Paper>
      </Typography>
      </Container>
    </div>
  );
}
