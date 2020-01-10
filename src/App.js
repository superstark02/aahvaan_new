import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faAddressCard, faInfo } from '@fortawesome/free-solid-svg-icons'
import { faAdobe, faApple, faGoogle, faAmazon, faMicrosoft, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CountUp from 'react-countup';

// Import the images
import Logo from './_img/logo.png'
import PlayersImage from './_img/PlayersImage.png'
import RegisterBg from './_img/bg2.svg'
import Football from './_img/football.png'
import img1 from './_img/1.jpg'
import img2 from './_img/2.jpg'
import img3 from './_img/3.jpg'
import img4 from './_img/4.jpg'
import img5 from './_img/5.jpg'
import img6 from './_img/6.jpg'
import img7 from './_img/7.jpg'

// import the custon CSS
import './styles/index.css'

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
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
    background: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))',
    width: '100%',
    height: '60px',
    zIndex: '1',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  navButton: {
    height: 'auto',
    width: 'auto',
    fontSize: '17px',
    position: 'relative',
    color: 'white',
    float: 'right',
    marginRight: '20px',
    opacity: '1',
  },
  containerAbout: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  about: {
    marginTop: '10px',
    marginBottom: '30px',
    paddingTop: '10px',
    overflow: 'hidden',
    color: '#143D7A',
  },
  content: {
    padding: '35px 8vw 35px 8vw',
    fontSize: '20px',
    lineHeight: '28px',
    width: '100%',
  },
  register: {
    padding: '20px 0px 20px 0px',
    height: '90vh',
  },
  title: {
    flexGrow: 1,
    zIndex: 1,
    color: 'black',
    opcaity: 1,
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
    float: 'right'
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
    position: 'absolute',
    width: '100%',
    height: '90vh',
    backgroundColor: 'black',
    zIndex: 1,
    opacity: 0.5,
  },
  textcontainer: {
    position: 'absolute',
    top: '45%',
    left: '30%',
    right: '30%',
    color: 'white',
    border: 'solid',
    borderColor: 'white',
    opcaity: 1,
    borderWidth: 'thick ',
    zIndex: 2,
  },
  sponsorHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  sponsorDiv: {
    width: '100%',
    textAlign: 'center',
  },
  upper: {
    backgroundColor: '#343A40',
    color: 'white',
    padding: '10px',
  },
  lower: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#212529',
  },
  footer: {
    width: '100%',
    margin: 0,
    height: '40vh',
    background: '#495057',
    borderRadius: '0',
  },
  footerTable: {
    padding: '8px 0px',
    color: 'white',
    width: '100%',
  },
  trr: {
    margin: '0',
    padding: '0%',
  },
  buttonUp: {
    color: 'white',
  },
  CarouselPaper: {
    padding: '0',
    margin: '0',
    width: '100%',
  },
  register_contain: {
    padding: '10px',
    backgroundColor: 'transparent',
    height: '60vh',
    width: '310px',
  },
  paper: {
    height: '30vw',
    width: '30vw',
    maxWidth: 200,
    maxHeight: 200,
    minWidth: 160,
    minHeight: 160,
    textAlign:'center',
    fontSize:'30px',
    border:'solid',
    borderRadius:'50%',
    borderWidth:'10px',
    borderColor:'orange'
  },
  control: {
    backgroundColor:'grey'
  },
  count:{
    paddingTop:'70px',
    color:'grey'
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalFade: {
    color: 'white',
    backgroundColor: '#343A40',
    padding: '30px',
    borderRadius: '2px',
  },
}));

export default function ButtonAppBar() {
  const [index, setIndex] = React.useState(0)
  const classes = useStyles();
  const [events, setEvents] = React.useState('1');

  const handleChange = event => {
    setEvents(events.target.value);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 6) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  /*
  Fuctions for counter
  */
  const [spacing, setSpacing] = React.useState(2);

  const handleChange1 = event => {
    setSpacing(Number(event.target.value));
  };

  //---------------- Functions for contact modals -----------------
  // Data to be displayed in modals.
  const contactData = [
    {
      name: 'Tarun Kumar',
      phone: '72104 99455',
      desig: 'Developer',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png',
    },
    {
      name: 'Mrigank Singh',
      phone: '97565 97885',
      desig: 'Desig',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png',
    },
    {
      name: 'Shivam Gupta',
      phone: '95180 094013',
      desig: 'Desig',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png',
    },
    {
      name: 'Ayush Garg',
      phone: '99907 66015',
      desig: 'Desig',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png',
    },
  ]
  const [open, setOpen] = React.useState(false)
  const [dataIndex, setDataIndex] = React.useState(0)

  const handleOpen = (i) => {
    setDataIndex(i)
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };
  //---------------------------------------------------------------

  return (
    <div className="app" id="top">
      {/*---------Navbar----------------*/}
      <div className={classes.navBar}>
        <HashLink smooth to="/#about"><div className={classes.navButton}>ABOUT</div></HashLink>
        <HashLink smooth to="/#contact"><div className={classes.navButton}>CONTACT US</div></HashLink>
        <div className={classes.navButton}>
          <a target="_blank" style={{color: 'white'}} href="https://www.facebook.com/aahvaandtu/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className={classes.navButton}>
          <a target="_blank" style={{color: 'white'}} href="https://www.instagram.com/aahvaandtu/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <Paper className={classes.CarouselPaper}>
        <Gallery
          enableIndicators={false}
          enableControls={false}
          style={{
            background: "black",
            height: "100vh",
            width: '100%',
            padding: '0',
          }}
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(image => (
            <GalleryImage objectFit="cover" key={image} src={image} style={{
              width: '100%',
              margin: '0',
              padding: '0'
            }} />
          ))}
        </Gallery>
      </Paper>
      {/*-------------------------------*/}

      {/*-----------About section-------------*/}
      <div id="about" className={classes.about}>
        <Typography variant="h5" className={classes.title} style={{ color: '#143D7A' }} align='center'>
          ABOUT
        </Typography>
        <div className={classes.content}>
          <img style={{ float: "right", margin: "25px", }} width="260px" height="260px" src={PlayersImage} />
          <p style={{ padding: 'inherit 50px', width: '40vw', minWidth: '312px' }}>
            Aahvaan is a platform for you to go beyond conventional fest advertising. The team
            wants to give you value for your money and has built an extensive network to ensure
            just that. With us, you wil be able to advertise outside campus and tap audiences of
            various age groups. With us, you are not restricted to college students.
          </p>
          <Button variant="contained" style={{ backgroundColor: '#F9712D', color: 'white', width: '150px', margin: '10px 0px' }}>
            MEET COUNCIL
          </Button>
        </div>
      </div>
      {/*-------------------------------------*/}

      {/*---------Registration Part-------------*/}
      <div id="register" className={classes.register} style={{ display: 'flex', flexWrap: 'wrap' }}>
       <div style={{width:'100%'}}> <Typography variant="h5" className={classes.title} align='center' style={{ width: '100%' }}>
          REGISTER
        </Typography>
        </div>
        <img src={RegisterBg} style={{width: '100%'}} />
          
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute', marginTop:'50px' }}>
          <div className='football-image' style={{width:'60%',display:'flex', justifyContent:'center'}}>
            <img src={Football} style={{width: '40%'}} />
          </div>
          <div className='register-card' style={{width:'40%', display:'flex', justifyContent:'center'}}>
            <Paper className={classes.register_contain}>
              <div style={{ textAlign: 'center', height: '70%', marginBottom: '50px' }}>
                <h2>THE REAL SPORT</h2>
                <h1>FOOTBALL</h1>
                <h2>LANDING PAGE</h2>
                <p>You’ll only be able to find a GitHub user by their email address if they’ve chosen to list it publicly. Otherwise, use their username instead.</p>
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button component={Link} to="/team" variant="contained" style={{ backgroundColor: 'black', color: 'white', margin: '10px', }}>
                  Team
                </Button>
                <Button component={Link} to="/single" variant="contained" style={{ backgroundColor: 'black', color: 'white', margin: '10px' }}>
                  Single
                </Button>
              </div>
            </Paper>
          </div>
        </div>
      </div>
      {/*-------------------------------------*/}

      {/*-----------Counter section-------------*/}
      <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '25px', flexWrap: 'wrap', background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
      backgroundBlendMode: 'multiply,multiply', padding: '10px 0px'}}>
        <Paper className={classes.paper}>
          <div className={classes.count}>
            <CountUp end={500}/>
          </div>
        </Paper>

        <Paper className={classes.paper}>
          <div className={classes.count}>
            <CountUp end={500}/>
          </div>
        </Paper>

        <Paper className={classes.paper}>
          <div className={classes.count}>
            <CountUp end={500}/>
          </div>
        </Paper>
      </div>
      {/*---------------------------------------*/}

      {/*------- Bar for sponsers-------*/}
      <div className={classes.sponsorsDiv}>
        <Typography variant="h5" color="textSecondary" align="center">
          Our Sponsors
        </Typography>
        <Typography variant="h6" align="center">
          <div className="sponsors">
            <FontAwesomeIcon icon={faAdobe} />
            <FontAwesomeIcon icon={faAmazon} />
            <FontAwesomeIcon icon={faApple} />
            <FontAwesomeIcon icon={faGoogle} />
            <FontAwesomeIcon icon={faMicrosoft} />
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
            <Typography className={classes.sponsorHeading}>Past Sponsors</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.sponsorDiv}>
              <Typography variant="h6" align="center">
                <div className="sponsors">
                  <FontAwesomeIcon icon={faAdobe} />
                  <FontAwesomeIcon icon={faAmazon} />
                  <FontAwesomeIcon icon={faApple} />
                  <FontAwesomeIcon icon={faGoogle} />
                  <FontAwesomeIcon icon={faMicrosoft} />
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
          <table className={classes.footerTable}>
            <tbody>
              <tr>
                <th>CONTACT US</th>
                <th>HELP</th>
                <th>INFORMATION</th>
              </tr>
              <tr>
                <td onClick={ () => {handleOpen(0)} }>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;
                  {contactData[0].name}
                </td>
                <td rowSpan='3'><FontAwesomeIcon icon={faAddressCard} />&nbsp;Delhi Technological University<br></br>Shahbad Daulatpur,Main Bawana Road<br></br>Delhi-110042.</td>
                <td><FontAwesomeIcon icon={faInfo} />&nbsp;About Us</td>
              </tr>
              <tr>
                <td onClick={ () => {handleOpen(1)} }>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;
                  {contactData[1].name}
                </td>
                <td>Council</td>
                <td></td>
              </tr>
              <tr>
                <td onClick={ () => {handleOpen(2)} }>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;
                  {contactData[2].name}
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td onClick={ () => {handleOpen(3)} }>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;
                  {contactData[3].name}
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p style={{ textAlign: 'center', fontSize: '30px'}}>
            <a target="_blank" style={{color: 'white'}} href="https://www.facebook.com/aahvaandtu/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            &nbsp;&nbsp;
            <a target="_blank" style={{color: 'white'}} href="https://www.instagram.com/aahvaandtu/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            &nbsp;&nbsp;
          </p>
        </div>

        {/*------------- Modals for contacts -------------------*/}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        >
          <Fade in={open} className={classes.modalFade}>
            <div>
              <img src={contactData[dataIndex].imgSrc} width="60px" height="60px"></img>
              <h2>{contactData[dataIndex].name}</h2>
              <p>{contactData[dataIndex].desig}</p>
              <p>{contactData[dataIndex].phone}</p>
            </div>
          </Fade>
        </Modal>
        {/*-----------------------------------------------------*/}

        <div className={classes.lower}>
          <HashLink smooth to="/#top">
            <Button href="" className={classes.buttonUp} style={{ width: '25px', fontSize: '20px' }}>
              <img src={Logo} width="25px" height="34px" alt="Aahvaan Logo" />
            </Button>
          </HashLink>
        </div>
      </div>

      {/*------------------------------------*/}
    </div>
  );
}