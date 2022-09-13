import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


 const SwitchLanguage =({checked, handleChange})=> {

  const labelLanguage = () =>{
    if (checked){
        return "«English» Language";
    }
      return "«Ork» Language";
  }

  return (
      <FormControlLabel 
         control={<Switch checked={checked} onChange={handleChange} color="default"/>} 
         label={labelLanguage()} 
         labelPlacement="start"
      />
  );
}

export default SwitchLanguage