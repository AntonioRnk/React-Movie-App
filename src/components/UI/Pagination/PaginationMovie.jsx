import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationMovie = ({pages,currentPage,handleCurrent}) => {

  return (
    <Stack spacing={2}>
      <Pagination 
       count={pages} 
       variant="outlined" 
       shape="rounded" 
       size="large"
       boundaryCount={4}
       showFirstButton 
       showLastButton
       page={currentPage} 
       onChange={(event,value)=>{handleCurrent(value)}}
      />
    </Stack>
  );
}

export default PaginationMovie