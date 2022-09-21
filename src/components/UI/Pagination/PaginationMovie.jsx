import React, { useEffect, useRef } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { searchPage } from '../../../redux/actions';
import styles from './Pagination.module.scss';
import { useState } from 'react';

const PaginationMovie = ({pages}) => {
  
  const dispatch = useDispatch();
  const [boundary, setBoundary] = useState(2);
  const [showButtons, setShowButtons] = useState(true)
  
  const ref = useRef();
  
  useEffect(() => {
    const width = ref.current.offsetWidth;
    if (width < 506){
      setBoundary(1);
    }
    if (width < 480){
      setShowButtons(false);
    }
  }, []);

  const currentPage = useSelector((state)=>{
    const {searchReducer} = state;
    return searchReducer.page;
  })

  function handleCurrent(event,value) {
    dispatch(searchPage(value));
  }
  console.log()
  return (
    <Stack spacing={2}>
      <Pagination
       ref={ref}
       className={styles.pagination} 
       count={pages} 
       variant="outlined" 
       shape="rounded" 
       size="medium"
       boundaryCount={boundary}
       showFirstButton = {showButtons}
       showLastButton = {showButtons}
       page={currentPage} 
       onChange={handleCurrent}
      />
    </Stack>
  );
}

export default PaginationMovie