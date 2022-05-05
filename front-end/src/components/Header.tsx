import { Grid } from '@mui/material';
import * as React from 'react';
import { userContext } from '../userContext';

const getTitle = () => ({
  name: 'Institutional Pricing Tool',
  version: '5.0.1',
});

export const Header = () => {
  const user = React.useContext(userContext);
  const title = getTitle();
  return (
    <Grid container style={{ background: '#0c2b4a' }} margin={'2px'}>
      <Grid
        xs={6}
        color={'#ffffff'}
        margin={'3px'}
        textAlign={'right'}
        padding={'2px'}
      >
        {title.name}
      </Grid>
      <Grid
        item
        xs={1}
        color={'#2196f3'}
        margin={'3px'}
        textAlign={'left'}
        padding={'2px'}
      >
        {title.version}
      </Grid>
      <Grid
        item
        xs={4}
        color={'#2196f3'}
        margin={'3px'}
        textAlign={'right'}
        padding={'2px'}
      >
        {user.name}
      </Grid>
    </Grid>
  );
};
