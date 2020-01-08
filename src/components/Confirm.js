import React from 'react'
import { Table, TableBody, TableContainer, TableRow, TableCell, Paper, Container } from '@material-ui/core'

const generateMembersList = (members) => {
  return(
    members.map((member, index) => {
      return(
          <TableRow key={index}><TableCell align='right'>Member {index + 1}:</TableCell><TableCell align='left'>{member}</TableCell></TableRow>
        )
      }
    )
  )
}

const Confirm = ({ data }) => {
  if (data.single) {
    // For single registrations.
    return (
      <Container maxWidth="sm">
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align='right'><strong>Registration type:</strong></TableCell>
                <TableCell align='left'>Single</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Name:</strong></TableCell>
                <TableCell align='left'>{data.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Email-id:</strong></TableCell>
                <TableCell align='left'>{data.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Event:</strong></TableCell>
                <TableCell align='left'>{data.events}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>College:</strong></TableCell>
                <TableCell align='left'>{data.college}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Accommodation wanted:</strong></TableCell>
                <TableCell align='left'>{data.stay ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  } else {
    // For team registration.
    return (
      <Container maxWidth="sm">
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell align='right'><strong>Registration type:</strong></TableCell>
                <TableCell align='left'>Team</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Name (Leader):</strong></TableCell>
                <TableCell align='left'>{data.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Email-id (Leader):</strong></TableCell>
                <TableCell align='left'>{data.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Event:</strong></TableCell>
                <TableCell align='left'>{data.events}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Members Count:</strong></TableCell>
                <TableCell align='left'>{data.teamMemberCount}</TableCell>
              </TableRow>
              <TableRow colSpan="2">
                <TableCell align='right'><strong>Members Name:</strong></TableCell>
              </TableRow>
              {generateMembersList(data.teamMemberName)}
              <TableRow>
                <TableCell align='right'><strong>College:</strong></TableCell>
                <TableCell align='left'>{data.college}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='right'><strong>Accommodation wanted:</strong></TableCell>
                <TableCell align='left'>{data.stay ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  }
}

export default Confirm