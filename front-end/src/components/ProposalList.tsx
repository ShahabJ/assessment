import * as React from 'react';
import { Proposal } from '../Intererfaces/Proposal';
// import { TableDetail } from './TableDetails';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ProposalRowHeader } from './ProposalRowHeader';
import { ProposalRow } from './ProposalRow';
import { Loading } from './Loading';

export function ProposalList() {
  const [proposals, setProposals] = React.useState<Proposal[]>([]);
  const [status, setStatus] = React.useState('Loading');

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/proposal/`);
        const json = await response.json();
        console.log(json);

        setStatus('Loaded');
        setProposals(json);
      } catch (e) {
        setStatus('Error');
      }
    })();
  }, []);
  if (status === 'Loading') return <Loading />;
  if (status === 'Error')
    return <div>Something went wrong,Please try again.</div>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <ProposalRowHeader />
        <TableBody>
          {proposals.map((proposal) => (
            <ProposalRow key={proposal.id} proposal={proposal} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
