import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Confirm from './Confirm'

const SingleForm = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      zIndex: 1,
      color: 'white',
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
      padding: '16px 32px',
      position: 'absolute',
      marginLeft:650,
      marginTop:300,
      color: 'white',
      border: 'solid',
      borderColor:'white',
      opcaity:1,
      borderWidth: 'thick ',
      zIndex: 2,
    }
  }));

  const classes = useStyles();

  // Logic for the drop-down menu.
  // List of events to choose from. Change it to add the events.
  const sportsEvents = [
    'Event1',
    'Event2',
    'Event3',
    'Event4',
    'Event5',
    'Event6'
  ];

  const [choosenEvents, setChoosenEvents] = React.useState([])

  const handleChangeMultiple = event => {
    setChoosenEvents(event.target.value)
  };

  const [formView, setFormView] = useState(true)
  const [data, setData] = useState({})

  // Function for handling form submissions.
  const handleSubmission = (event) => {
    // Handle the form submission.
    event.preventDefault()
    if (choosenEvents.length === 0) {
      alert('Please fill the events you want to participate in.')
      return
    }

    const inputData = {
      single: true,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      teamMemberCount: 0,
      teamMemberName: null,
      events: choosenEvents,
      college: document.getElementById('college').value,
      stay: document.getElementById('stay-check').checked,
    }
    setData(inputData)

    setFormView(false)
  }

  // Event-handler for edit button click
  const handleEdit = () => {
    setFormView(true)
  }

  // Event-handler for proceed button click
  const submitForm = () => {
    console.log('Clicked')
    /*
    -
    - Write the code to push the userInput to database inside this function.
    -
    */
  }

  if (formView) {
    return (
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmission} >
        <TextField id="name" label="Name" variant="outlined" fullWidth={true} required />
        <TextField id="email" label="Email" type="email" variant="outlined" fullWidth={true} required />
        {/*Dropdopwn for events*/}
        <InputLabel id="mutiple-event-label">Events*</InputLabel>
        <Select
          labelId="mutiple-event-label"
          id="mutiple-events"
          multiple
          value={choosenEvents}
          onChange={handleChangeMultiple}
          input={<Input />}
          fullWidth={true}
          required
        >

        {sportsEvents.map(event=> (
          <MenuItem key={event} value={event}>
            {event}
          </MenuItem>
        ))}

        </Select>
        {/*-------------------*/}
        <TextField id="college" label="College" variant="outlined" fullWidth={true} required />
        <FormControlLabel id="stay-label" control={<Checkbox id="stay-check" value="stayNeeded" fullWidth={true} />}
          label="Check here if you need accommodation"
        />
        {/*---Submit button---*/}
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
        {/*------------------*/}
      </form>
    )

  } else {

    return(
      <React.Fragment>
        <Confirm data={data} />
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={submitForm}>
          Proceed
        </Button>
      </React.Fragment>
    )

  }
}

  export default SingleForm