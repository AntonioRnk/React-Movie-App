import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TrailerList from '../../TrailerList/TrailerList';
import styles from './ModalMovie.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '850px',
  bgcolor: 'rgba(63, 61, 75, 0.98)',
  boxShadow: 24,
  overflowY:"auto",
  maxHeight: "90%",
  padding: "0 5px 0 0"
};

const ModalMovie = ({idMovie}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.modalMovie}>
      <button onClick={handleOpen}>Переглянути Трейлер<span>&#9654;</span></button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
         <TrailerList idMovie={idMovie}/>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMovie