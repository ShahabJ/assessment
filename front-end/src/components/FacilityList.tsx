import * as React from 'react';
import Box from '@mui/material/Box';
import { Facility } from '../Intererfaces/Facility';
import { FacilityDetails } from './FacilityDetails';
import { useEffect } from 'react';

export const TableDetail = (props: { facilities: Facility[] }) => {
  const { facilities } = props;
  const [facilityId, setFacilityId] = React.useState(0);

  React.useEffect(() => {
    if (facilities.length !== 0) setFacilityId(facilities[0].id);
  }, []);

  if (facilities.length === 0) return <div>“No facilities found”</div>;

  const getSelectedFacility = (facilityId: number) =>
    facilities.find((f) => f.id === facilityId) as Facility;

  return (
    <Box sx={{ margin: 1 }}>
      <label htmlFor="Facility">
        Facility
        <select
          id="facility"
          value={facilityId}
          onChange={(e) => setFacilityId(+e.target.value)}
          onBlur={(e) => setFacilityId(+e.target.value)}
        >
          {facilities.map((f) => (
            <option value={f.id} key={f.id}>
              {f.facilityName}
            </option>
          ))}
        </select>
      </label>
      <FacilityDetails facility={getSelectedFacility(facilityId)} />
    </Box>
  );
};
