import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import img from 'E:/Downloads/20180327074549_IMG_6866-01.jpg';
import Logo from './_img/logo.png'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Bg from './_img/contentBg.svg'
import PlayersImage from './_img/PlayersImage.svg'

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
    padding: '0',
    margin:0,
    width:'100%',
    backgroundColor: 'black',
    height: '10vh',
    zIndex: '1',
    position: 'absolute',
    opacity:'1',
  },
  navButton: {
    height:'auto',
    width:'auto',
    fontSize: '17px',
    position:'relative',
    color:'white',
    float:'right',
    marginTop:'20px',
    marginRight:'20px',
    opacity:'1',
  },
  containerAbout:{
    width:'auto',
    height:'auto',
    backgroundColor:'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  about: {
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: '40px',
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
    backgroundColor: 'white',
    margin: '0px',
  },
  upper: {
    backgroundColor: '#343A40',
    color: 'white',
    padding: '2%',
    display: 'flex',
    alignItems: 'stretch',
    height: '20vh',
  },
  lower: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#212529',
  },
  buttonUp: {
    color: 'white',
  },
  sponser_root: {
    width: '100%',
    margin:'50px',
    padding:'50px',
  },
  sponser_heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
    <div className="app" id="top">
      {/*---------Navbar----------------*/}
      <div className={classes.navBar}>
        <HashLink smooth to="/#about"><div className={classes.navButton}><b>CONTACT US</b></div></HashLink>
        <HashLink smooth to="/#contact"><div className={classes.navButton}><b>ABOUT</b></div></HashLink>
      </div>
      {/*-------------------------------*/}

      {/*----------Overlay--------------*/}
      <Carousel autoPlay={true}>
        <div className={classes.overlay}>
          <img src={img} />
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        </div>
        <div>
          <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        </div>
      </Carousel>
      {/*-------------------------------*/}

      {/*-----------About section-------------*/}
      <div id="about" className={classes.about}>
        <Typography variant="h5" className={classes.title} align='center'>
          ABOUT
        </Typography>
        <div className={classes.content}>
          <img style={{float: "right", margin: "0px 0px 0px 25px", width: '380px', height: 'auto'}} src={PlayersImage} />
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
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
          <Typography className={classes.heading}>Past Sponsers</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.sponsorsDiv}>
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
          </ExpansionPanelDetails>
        </ExpansionPanel>
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