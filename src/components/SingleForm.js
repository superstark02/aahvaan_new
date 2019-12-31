import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Confirm from './Confirm'

const SingleForm = () => {
  const useStyles = makeStyles(theme => ({
    form: {
      spacing: 5,
    },
    formCard: {
      width: '96vw',
      boxShadow: '2px 2px 10px 0px gray',
      borderRadius: '20px',
      padding: '0px',
      paddingTop: '14px',
      paddingBottom: '14px',
      margin: '0px',
      marginLeft: '2vw',
    },
    TextField: {
      padding: 0,
      margin: 8,
      spacing: 5,
      width: '92vw',
      marginLeft: '2vw'
    },
    InputLabel: {
      padding: 5,
      margin: 10,
      marginLeft: '2vw',
      width: '92vw',
      spacing: 5
    },
    Select: {
      padding: 5,
      margin: 5,
      marginLeft: '2vw',
      spacing: 5,
      width: '92vw',
    },
    Checkbox: {
      padding: 10,
      margin: 10,
      spacing: 10,
      marginLeft: '2vw'
    },
    Button: {
      marginLeft: '2vw',
      marginTop: theme.spacing(0),
      spacing: 5,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    buttonDiv: {
      borderRadius: '5px',
      boxShadow: '2px 2px 10px 0px gray',
      position: 'relative',
      top: '15px',
      width: '92vw',
      marginLeft: '4vw',
      padding: '8px',
    },
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

  const [choosenEvent, setChoosenEvent] = React.useState('')

  const handleChangeEvent = event => {
    setChoosenEvent(event.target.value)
  };

  // States to handle input from text-field.
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [collegeInput, setCollegeInput] = useState('')
  const [stayInput, setStayInput] = useState(false)

  // Event handler for text-field input change
  const handleNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const handleCollegeInputChange = (event) => {
    setCollegeInput(event.target.value)
  }

  const handleStayInputChange = (event) => {
    setStayInput(event.target.checked)
  }

  // State to toggle between form view & confirmation view.
  const [formView, setFormView] = useState(true)

  // State to hold the user entered data.
  const [data, setData] = useState({})

  // Function for handling form submissions.
  const handleSubmission = (event) => {
    // Handle the form submission.
    event.preventDefault()
    if (choosenEvent === '') {
      alert('Please fill the events you want to participate in.')
      return
    }

    const inputData = {
      single: true,
      name: nameInput,
      email: emailInput,
      teamMemberCount: 0,
      teamMemberName: null,
      events: choosenEvent,
      college: collegeInput,
      stay: stayInput,
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
    console.log(data)
    /*
    -
    - Write the code to push the userInput to database inside this function.
    -
    */
  }

  if (formView) {
    return (
      <React.Fragment>
        <h1 align="center">
          <AppBar color="secondary">
            SINGLE REGISTRATION
          </AppBar> 
        </h1>
        <br />
        <br />
        <br />
        <div className={classes.formCard}>
          <form autoComplete="off" onSubmit={handleSubmission} >
            <TextField className={classes.TextField} id="name" label="Name" variant="outlined" required
            value={nameInput} onChange={handleNameInputChange} />
            <TextField className={classes.TextField} id="email" label="Email" type="email" variant="outlined" required
            value={emailInput} onChange={handleEmailInputChange} />
            
            {/*Dropdopwn for events*/}
            <FormControl required className={classes.formControl}>
              <InputLabel className={classes.InputLabel} id="event-label">Events</InputLabel>
              <Select
              className={classes.Select}
              labelId="event-label"
              id="events"
              value={choosenEvent}
              onChange={handleChangeEvent}
              input={<Input />}
              >
              <MenuItem value="" disabled>Events</MenuItem>
              {sportsEvents.map(event=> (
                <MenuItem key={event} value={event}>
                {event}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
            
            {/*-------------------*/}
            <TextField className={classes.TextField} id="college" label="College" variant="outlined" required 
            value={collegeInput} onChange={handleCollegeInputChange} />
            <FormControlLabel id="stay-label"
            control={<Checkbox className={classes.Checkbox} id="stay-check" value="stayNeeded" checked={stayInput} onChange={handleStayInputChange} />}
            label="Check here if you need accommodation"
            />
            {/*---Submit button---*/}
            <br />
            <Button className={classes.Button} variant="contained" color="secondary" type="submit">
              Submit
            </Button>
            {/*------------------*/}
          </form>
        </div>
      </React.Fragment>
    )

  } else {

    return(
      <React.Fragment>
        <h1 align="center">
          <AppBar color="secondary">
            CONFIRM DETAILS
          </AppBar> 
        </h1>
        <br />
        <br />
        <br />
        <Confirm data={data} />
        <div className={classes.buttonDiv}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Button style={{width: 'calc(23vw - 4px)',}} variant="contained" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            </Grid>
            <Grid item xs={9}>
              <Button style={{width: 'calc(68vw - 10px)',}} variant="contained" color="secondary" onClick={submitForm}>
                Proceed
              </Button>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )

  }
} 

export default SingleForm