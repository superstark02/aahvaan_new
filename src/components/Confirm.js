import React from 'react'
import { Table, TableBody, TableContainer, TableRow, TableCell, Paper } from '@material-ui/core'

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
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align='right'>Registration type:</TableCell>
              <TableCell align='left'>Single</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Name:</TableCell>
              <TableCell align='left'>{data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Email-id:</TableCell>
              <TableCell align='left'>{data.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Event:</TableCell>
              <TableCell align='left'>{data.events}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>College:</TableCell>
              <TableCell align='left'>{data.college}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Accommodation wanted:</TableCell>
              <TableCell align='left'>{data.stay ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  } else {
    // For team regisTableRowations.
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align='right'>Registration type:</TableCell>
              <TableCell align='left'>Team</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Name (Leader):</TableCell>
              <TableCell align='left'>{data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Email-id (Leader):</TableCell>
              <TableCell align='left'>{data.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Event:</TableCell>
              <TableCell align='left'>{data.events}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Members Count:</TableCell>
              <TableCell align='left'>{data.teamMemberCount}</TableCell>
            </TableRow>
            <TableRow colSpan="2">
              <TableCell align='right'>Members Name:</TableCell>
            </TableRow>
            {generateMembersList(data.teamMemberName)}
            <TableRow>
              <TableCell align='right'>College:</TableCell>
              <TableCell align='left'>{data.college}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Accommodation wanted:</TableCell>
              <TableCell align='left'>{data.stay ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default Confirm