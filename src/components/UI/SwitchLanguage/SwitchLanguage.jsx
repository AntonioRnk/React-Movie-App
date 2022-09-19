import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './SwitchLanduage.module.scss';

 const SwitchLanguage =({checked, handleChange})=> {

  let labelName = "«English» Language";

  if (!checked){
      labelName ="«Ork» Language";
   }

  return (
      <FormControlLabel className={styles.switch}
         control={<Switch checked={checked} onChange={handleChange} color="default"/>} 
         label={labelName} 
         labelPlacement="start"
      />
  );
}

export default SwitchLanguage