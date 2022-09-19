import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from './RangeSlider.module.scss'
import { useDispatch } from 'react-redux';
import { searchFromDate, searchPage } from '../../../redux/actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RangeSlider = () => {

  const minDistance = 2;
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const [value,SetValue] = useState([1960, 2023]);

  const changeCommit = (event, value) =>{
    dispatch(searchPage(1));
    dispatch(searchFromDate(value));
    navigate("/searching");
  }

  const handleChange = (event, newValue, activeThumb) => {

    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 2023 - minDistance);
        SetValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        SetValue([clamped - minDistance, clamped]);
      }
    } else {
        SetValue(newValue);
    }
  };

  return (
    <Box className={styles.boxInner} sx={{ width: 250 }}>
     <h4 className={styles.title}>Дата виходу у прокат:</h4>
      <Slider
        min = {1900}
        max = {2023}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        onChangeCommitted = {changeCommit}
        disableSwap
      />
     <div className={styles.inner}>
      <div className={styles.min}>{value[0]} р.</div>
      <div className={styles.max}>{value[1]} р.</div>
     </div>
    </Box>
  );
}

export default RangeSlider