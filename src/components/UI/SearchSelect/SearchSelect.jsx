import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import styles from './SearchSelect.module.scss';

const SearchSelect = ({nameList, selectList, route}) => {

  const [listId, setListId] = useState('');
  const navigate = useNavigate();

  function changeHande(event){
    setListId(event.target.value);
    const [listItem] = selectList.filter(item=>item.id===event.target.value);
    if(event.target.value){
        navigate(`${route}${listItem.id}/${listItem.name}`);
    }
    else{
        navigate("/");
    }
  }
  
  return (
    <div className={styles.selectForm}>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 250 }}>
        <InputLabel>{nameList}</InputLabel>
        <Select
          value={listId}
          onChange={changeHande}
        >
          <MenuItem value=''>
            <em>Не вибрано</em>
          </MenuItem>
          {selectList && selectList.map(item=>{
            return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchSelect;