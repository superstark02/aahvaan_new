import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Gallery, GalleryImage } from 'react-gesture-gallery';
import { createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import { faAdobe, faApple, faGoogle, faAmazon, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import Logo from './_img/logo.png'

// import the custon CSS
import './styles/index.css'

const images = [
  'http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png',
  'http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png',
  'http://www.icons101.com/icon_png/size_256/id_79394/youtube.png',
];

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#D98825',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#F2B84B',
      main: '#D98825',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    color: 'white',
    backgroundColor: 'gray',
    border: '4px solid black',
    padding: '2px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginTop: '15px',
    marginBottom: '14px',
  },
  navBar: {
    padding: '13px',
    backgroundColor: 'black',
    opacity: '0.75',
    height: '10vh',
    zIndex: '1',
  },
  navButtonContact: {
    position: 'absolute',
    top: '2.5vh',
    minTop: '10px',
    right: '18px',
    color: 'white',
    border: '1px solid white',
    opacity: '1',
    fontSize: '20px',
    zIndex: '2',
  },
  navButtonAbout: {
    position: 'absolute',
    top: '2.5vh',
    minTop: '10px',
    right: '183px',
    color: 'white',
    border: '1px solid white',
    opacity: '1',
    fontSize: '20px',
    zIndex: '2',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  about: {
    backgroundColor: '#eeeeee',
    padding: '20px 0px 20px 0px',
  },
  content: {
    padding: '35px 8vw 35px 8vw',
    fontSize: '20px',
    lineHeight: '40px',
    width: '100%',
  },
  register: {
    padding: '20px 0px 20px 0px',
  },
  title: {
    flexGrow: 1,
    zIndex: 1,
    color: 'black',
    opcaity:1,
  },
  card: {
    minWidth: 275,
  },
  cardbullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardtitle: {
    fontSize: 14,
  },
  cardpos: {
    marginBottom: 12,
  },
  gridroot: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  registerpaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  eventroot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  TextField: {
    margin: 10,
  },
  overlay: {
    position:'absolute',
    width: '100%',
    height: '90vh',
    backgroundColor:'black',
    zIndex:1,
    opacity:0.5,
  },
  textcontainer: {
    position: 'absolute',
    top:'45%',
    left:'30%',
    right:'30%',
    color: 'white',
    border: 'solid',
    borderColor:'white',
    opcaity:1,
    borderWidth: 'thick ',
    zIndex: 2,
  },
  sponsorsDiv: {
    backgroundColor: '#f9f9f9',
    margin: '0px',
  },
  upper: {
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '2%',
    display: 'flex',
    alignItems: 'stretch',
    height: '20vh',
  },
  lower: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
  },
  buttonUp: {
    color: 'white',
  },
}));

export default function ButtonAppBar() {
  const[index,setIndex] = React.useState(0)
  const classes = useStyles();
  const [events, setEvents] = React.useState('1');  

  const handleChange = event => {
    setEvents(events.target.value);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="app">

      {/*---------Navbar----------------*/}
      <div id="top">
        <div className={classes.navBar} position="sticky">
        </div>
      </div>
      <div id="navbar-content">
        <Typography className={classes.root}>
          <HashLink smooth to="/#about"><Button className={classes.navButtonAbout}>About</Button></HashLink>
          <HashLink smooth to="/#contact"><Button className={classes.navButtonContact}>Contact Us</Button></HashLink>
        </Typography>
      </div>
      {/*-------------------------------*/}

      {/*----------Overlay--------------*/}
      <div className="overlay-text-container" align="center">
        <h1 className="overlay-text">
          AAHVAAN
        </h1>
      </div>
      <div className="overlay-bg">
      </div>
      <Paper>
        <Gallery
          style={{
            background: "grey",
            height: "90vh",
            width: '100%',
          }}
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(image => (
            <GalleryImage objectFit="contain" key={image} src={image} className="image"/>
          ))}
        </Gallery>
      </Paper>
      {/*-------------------------------*/}

      {/*-----------About section-------------*/}
      <div id="about" className={classes.about}>
        <Typography variant="h5" className={classes.title} align='center'>
          ABOUT
        </Typography>
        <div className={classes.content}>
          <img style={{float: "right", margin: "0px 0px 0px 25px",}} src="https://images.unsplash.com/photo-1504305754058-2f08ccd89a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width="350px" height="200px" />
          Aahvaan is a platform for you to go beyond conventional fest advertising. The team
          wants to give you value for your money and has built an extensive network to ensure
          just that. With us, you wil be able to advertise outside campus and tap audiences of
          various age groups. With us, you are not restricted to college students.
        </div>
      </div>
      {/*-------------------------------------*/}

      {/*---------Form Components-------------*/}
      <div className={classes.register}>
        <Typography variant="h5" className={classes.title} align='center'>
          REGISTER
          <br />
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </Typography>
      </div>

      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={6}>
          <Paper className={classes.paper} align="center" elevation={3}>
            <div className={classes.avatar}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <Button component={ Link } to="/single" variant="contained" style={{backgroundColor: 'black', color: 'white'}}>
              Single
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} align="center" elevation={3}>
            <div className={classes.avatar}>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <Button component={ Link } to="/team" variant="contained" style={{backgroundColor: 'black', color: 'white'}}>
              Team
            </Button>
          </Paper>
        </Grid>
      </Grid>
      {/*-------------------------------------*/}

      {/*------- Bar for sponsers-------*/}
      <div className={classes.sponsorsDiv}>
        <Typography variant="h5" color="textSecondary" align="center">
          Our Sponsers
        </Typography>
        <Typography variant="h6" align="center">
          <div className="sponsors">
            <FontAwesomeIcon icon={faAdobe} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faAmazon} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faApple} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faGoogle} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faMicrosoft} />&nbsp;&nbsp;
          </div>
        </Typography>
      </div>
      {/*------------------------------------*/}

      {/*------- Bar for sponsers-------*/}
      <div className={classes.sponsorsDiv}>
        <Typography variant="h5" color="textSecondary" align="center">
          Past Sponsers
        </Typography>
        <Typography variant="h6" align="center">
          <div className="sponsors">
            <FontAwesomeIcon icon={faAdobe} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faAmazon} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faApple} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faGoogle} />&nbsp;&nbsp;
            <FontAwesomeIcon icon={faMicrosoft} />&nbsp;&nbsp;
          </div>
        </Typography>
      </div>
      {/*------------------------------------*/}

      {/*------------Footer------------------*/}
      <div>
        <div id="contact" className={classes.upper} align="right">
          <Typography style={{width: '100px',}}>For help or any queries:</Typography>
          <p style={{width: 'calc(100vw - 320px'}}></p>
          <Typography style={{width: '220px',}}>
            Contact-1: 8373-773747
            <br />
            Contact-2: 8373-773747
          </Typography>
        </div>
        
        <div className={classes.lower}>
          <HashLink smooth to="/#top">
            <Button href="" className={classes.buttonUp} style={{width: '25px', fontSize: '20px'}}>
              <img src={Logo} width="25px" height="34px" alt="Aahvaan Logo" />
            </Button>
          </HashLink>
        </div> 
      </div>
      {/*------------------------------------*/}
    </div>    
  );
}