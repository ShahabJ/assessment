import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

export const ProposalRowHeader = (): JSX.Element => {
  return (
    <TableHead style={{ backgroundColor: 'GrayText' }}>
      <TableRow>
        <TableCell>Proposal Name</TableCell>
        <TableCell align="right">Customer Group</TableCell>
        <TableCell align="right">Date [LastSaved]</TableCell>
        <TableCell align="right">Description</TableCell>
        <TableCell align="right">Status</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
};
