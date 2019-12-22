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
import Confirm from './Confirm';

const TeamForm = () => {
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
  const [formView, setFormView] = useState(true)

  // State to hold the user input
  const [data, setData] = useState({})
  //----------- Function to handle form submission -----------
  const handleSubmission = (event) => {
    // Handle the form submission.
    event.preventDefault()
    if (choosenEvents.length === 0) {
      alert('Please fill the events you want to participate in.')
      return
    }

    const inputData = {
      name: document.getElementById('name-leader').value,
      email: document.getElementById('email').value,
      teamMemberCount: document.getElementById('member-count').value,
      teamMemberName: [],
      events: choosenEvents,
      college: document.getElementById('college').value,
      stay: document.getElementById('stay-check').checked,
    }
    // Run a loop to collect the names of the team-members
    for (let i = 0; i < additionalTeamMembers; i++) {
      inputData.teamMemberName.push(document.getElementById(`member-name${i}`).value)
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
  
  // Function to generate the field for members.
  const generateNameFields = (num) => {
    const inputFields = []
    for (let i = 0; i < num; i++)
      inputFields.push(<TextField required key={i} id={`member-name${i}`} label={`Member ${i+1}`} variant="outlined" fullWidth={true} />)
    return inputFields
  }

  if (formView) {
    return(
      <form className={classes.root} Validate autoComplete="off" onSubmit={handleSubmission}>
        <TextField id="name-leader" label="Name (Leader)" variant="outlined" fullWidth={true} required
        value={nameInput} onChange={handleNameInputChange} />
        <TextField id="email" label="Email (Leader)" type="email" variant="outlined" fullWidth={true} required
        value={emailInput} onChange={handleEmailInputChange} />
        <TextField id="member-count" label="Members count (excluding leader)" variant="outlined" 
        type="number" InputProps={{ inputProps: { min: 1} }} fullWidth={true} value={additionalTeamMembers}
        onChange={handleTeamNumberChange} required />
        {generateNameFields(additionalTeamMembers)}
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
        <TextField id="college" label="College" variant="outlined" fullWidth={true} required 
        value={collegeInput} onChange={handleCollegeInputChange} />
        <FormControlLabel id="stay-label"
         control={<Checkbox id="stay-check" value="stayNeeded" fullWidth={true} checked={stayInput} onChange={handleStayInputChange} />}
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

export default TeamForm