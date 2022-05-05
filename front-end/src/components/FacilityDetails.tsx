import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Facility } from '../Intererfaces/Facility';
import { format } from 'date-fns';

const stringToNumberWithCommas = (input: number) =>
  input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const getDateFormat = (date: Date) => format(new Date(date), 'dd/MM/yyyy');

export const FacilityDetails = (props: { facility: Facility }) => {
  const { facility } = props;
  if (facility == null) return <div>No facilities found</div>;
  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Booking Country</TableCell>
          <TableCell>Currency</TableCell>
          <TableCell>Limit</TableCell>
          <TableCell>Start Date</TableCell>
          <TableCell>Maturity Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={facility.id}>
          <TableCell>{facility.bookingCountry}</TableCell>
          <TableCell>{facility.currency}</TableCell>
          <TableCell>{stringToNumberWithCommas(facility.limit)}</TableCell>
          <TableCell>{getDateFormat(facility.startDate)}</TableCell>
          <TableCell>{getDateFormat(facility.maturityDate)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
