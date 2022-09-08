import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { searchPage } from '../../../redux/actions';

const PaginationMovie = ({pages}) => {
  
  const dispatch = useDispatch();

  const currentPage = useSelector((state)=>{
    const {searchReducer} = state;
    return searchReducer.page;
  })

  function handleCurrent(event,value) {
    dispatch(searchPage(value));
  }
  
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
       onChange={handleCurrent}
      />
    </Stack>
  );
}

export default PaginationMovie