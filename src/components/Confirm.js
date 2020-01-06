import React from 'react'
import '../styles/confirm.css'

const generateMembersList = (members) => {
  return(
    members.map((member, index) => {
      return(
          <tr key={index}><td>Member {index + 1}:</td><td>{member}</td></tr>
        )
      }
    )
  )
}

const Confirm = ({ data }) => {
  if (data.single) {
    // For single registrations.
    return (
      <table border="1px" cellSpacing="0" className="confirm">
        <thead>
          <tr>
            <td>Registration type:</td>
            <td>Single</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Email-id:</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Event:</td>
            <td>{data.events}</td>
          </tr>
          <tr>
            <td>College:</td>
            <td>{data.college}</td>
          </tr>
          <tr>
            <td>Accommodation wanted:</td>
            <td>{data.stay ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    )
  } else {
    // For team registrations.
    return (
      <table border="1px" cellSpacing="0" className="confirm">
        <thead>
          <tr>
            <th>Registration type:</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name (Leader):</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Email-id (Leader):</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Event:</td>
            <td>{data.events}</td>
          </tr>
          <tr>
            <td>Members Count:</td>
            <td>{data.teamMemberCount}</td>
          </tr>
          <tr colSpan="2">
            <td>Members Name:</td>
          </tr>
          {generateMembersList(data.teamMemberName)}
          <tr>
            <td>College:</td>
            <td>{data.college}</td>
          </tr>
          <tr>
            <td>Accommodation wanted:</td>
            <td>{data.stay ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Confirm