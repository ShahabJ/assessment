import React, { useState } from 'react';
import { Header } from './components/Header';
import { user } from './Intererfaces/User';
import { userContext } from './userContext';
import { ProposalList } from './components/ProposalList';
const getUser = (): user => ({
  name: 'User123',
});

export default function App() {
  const [state, setState] = useState('Init');

  return (
    <>
      <userContext.Provider value={getUser()}>
        <Header />
        <div style={{ margin: '2px' }}>
          <button onClick={() => setState('Loadiing')}>Get Data</button>
        </div>
      </userContext.Provider>
      {state === 'Init' ? null : <ProposalList />}
    </>
  );
}
