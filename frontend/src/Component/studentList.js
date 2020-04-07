import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// Generate Order Data
function createData(id, name, studentID, attendance, quizMark) {
  return { id, name, studentID, attendance, quizMark };
}

const rows = [
  createData(0, "CHAN Tai Man", 1155110000, "100%", 100),
  createData(0, "CHAN Siu Ming", 1155110001, "70%", 50),
  createData(0, "WONG Siu Ming", 1155110002, "60%", 75),
  createData(0, "Someone", 1155110003, "0%", 0)
];

export default function studentList() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Student ID</TableCell>
            <TableCell>Attendance rate</TableCell>
            <TableCell>Quiz mark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.studentID}</TableCell>
              <TableCell>{row.attendance}</TableCell>
              <TableCell>{row.quizMark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
