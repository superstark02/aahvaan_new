import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import { Link } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Confirm from './Confirm'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import TokenDisplay from './TokenDisplay'

const TeamForm = () => {
  const useStyles = makeStyles(theme => ({
    form: {
      spacing: 5
    },
    formCard: {
      borderRadius: '2',
      padding: '14px 10px',
    },
    TextField: {
      padding: 0,
      spacing: 5,
      margin: '5px 0px',
      width: '100%',
    },
    InputLabel: {
      padding: 5,
      spacing: 5,
      width: '100%',
    },
    Select: {
      padding: 5,
      spacing: 5,
      width: '100%',
    },
    Checkbox: {
      padding: 10,
      spacing: 10,
    },
    Button: {
      backgroundColor: 'black',
      color: 'white',
      marginTop: theme.spacing(0),
      spacing: 5,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    buttonDiv: {
      borderRadius: '5px',
      position: 'relative',
      top: '40px',
      left: '0px',
      width: 'calc(100vw - 8px)',
      padding: '8px',
      margin: '5px',
      display: 'flex',
      justifyContent: 'space-around',
    },
  }));

  const classes = useStyles();

  // States to handle input from text-field.
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [collegeInput, setCollegeInput] = useState('')
  const [stayInput, setStayInput] = useState(false)
  const [additionalTeamMembers, setAdditionalMembers] = React.useState('')

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

  const handleTeamNumberChange = (event) => {
    setAdditionalMembers(event.target.value)
  }

  // State to toggle between form-view & confirmation-view
  const [formView, setFormView] = useState(1)

  // State to hold the user input
  const [data, setData] = useState({})
  //----------- Function to handle form submission -----------
  const handleSubmission = (event) => {
    // Handle the form submission.
    event.preventDefault()
    if (choosenEvent === '') {
      alert('Please fill the events you want to participate in.')
      return
    }

    const inputData = {
      name: document.getElementById('name-leader').value,
      email: document.getElementById('email').value,
      teamMemberCount: document.getElementById('member-count').value,
      teamMemberName: [],
      events: choosenEvent,
      college: document.getElementById('college').value,
      stay: document.getElementById('stay-check').checked,
    }
    // Run a loop to collect the names of the team-members
    for (let i = 0; i < additionalTeamMembers; i++) {
      inputData.teamMemberName.push(document.getElementById(`member-name${i}`).value)
    }

    setData(inputData)
    setFormView(2)
  }

  // Event-handler for edit button click
  const handleEdit = () => {
    setFormView(1)
  }

  // Event-handler for proceed button click
  const submitForm = () => {
    /*
    -
    - Write the code to push the userInput to database inside this function.
    -
    */
   setFormView(3)
  }

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
  
  // Function to generate the field for members.
  const generateNameFields = (num) => {
    const inputFields = []
    for (let i = 0; i < num; i++)
      inputFields.push(<TextField className={classes.TextField} required key={i} id={`member-name${i}`} label={`Member ${i+1}`} variant="outlined" fullWidth={true} />)
    return inputFields
  }

  if (formView == 1) {
    return(
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
          <Paper elevation={3} className={classes.formCard}>
            <form autoComplete="off" onSubmit={handleSubmission}>
              <TextField className={classes.TextField} id="name-leader" label="Name (Leader)" variant="outlined" required
              value={nameInput} onChange={handleNameInputChange} />
              <TextField className={classes.TextField} id="email" label="Email (Leader)" type="email" variant="outlined" required
              value={emailInput} onChange={handleEmailInputChange} />
              <TextField className={classes.TextField} id="member-count" label="Members count (excluding leader)" variant="outlined" 
              type="number" InputProps={{ inputProps: { min: 1} }} fullWidth={true} value={additionalTeamMembers}
              onChange={handleTeamNumberChange} required />
              {generateNameFields(additionalTeamMembers)}

              {/*Dropdopwn for events*/}
              <FormControl variant="outlined" required className={classes.formControl}>
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
              control={<Checkbox className={classes.Checkbox} color="default" id="stay-check" value="stayNeeded" checked={stayInput} onChange={handleStayInputChange} />}
              label="Check here if you need accommodation"
              />
              {/*---Submit button---*/}<br />
              <Button className={classes.Button} variant="contained" type="submit">
              Submit
              </Button>
              {/*------------------*/}
            </form>
          </Paper>
        </Container>
      </React.Fragment>
    )

  } else if (formView == 2) {

    return(
      <React.Fragment>
        <h1 align="center" style={{backgroundColor: 'black', color: 'white', padding: '5px 0px 5px 0px'}}>
          CONFIRM DETAILS
        </h1>
        <br />
        <br />
        <br />
        <Confirm data={data} />

        <div className={classes.buttonDiv}>
          <Button style={{width: '20vw', color: 'white', backgroundColor: 'black',}} variant="contained" color="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button style={{width: '60vw', color: 'white', backgroundColor: 'orangered',}} variant="contained" color="secondary" onClick={submitForm}>
            Proceed
          </Button>
        </div>
        
      </React.Fragment>
    )

  } else if (formView == 3) {

    return (
      <TokenDisplay />
    )

  }
}

export default TeamForm