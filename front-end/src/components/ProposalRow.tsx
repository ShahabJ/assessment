import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Proposal } from '../Intererfaces/Proposal';
import { TableDetail } from './FacilityList';
import { format } from 'date-fns';

export const ProposalRow = (props: { proposal: Proposal }) => {
  const { proposal } = props;
  const [open, setOpen] = React.useState(false);

  const getDateFormat = (date: Date) => format(new Date(date), 'dd LLL yyyy');

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {proposal.proposalName}
        </TableCell>
        <TableCell align="right">{proposal.customerGrpName}</TableCell>
        <TableCell align="right">{getDateFormat(proposal.date)}</TableCell>
        <TableCell align="right">{proposal.description}</TableCell>
        <TableCell align="right">{proposal.status}</TableCell>
        <TableCell>
          <div onClick={() => setOpen(!open)}>VIEW SUMMARY</div>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableDetail facilities={proposal.facilities} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
