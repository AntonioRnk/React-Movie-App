import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import styles from './SearchSelect.module.scss';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { searchFromGenre, searchPage } from '../../../redux/actions';

const SearchGenrySelect = ({nameList, selectList, route}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function changeHande(event){
    dispatch(searchPage(1));
    const [listItem] = selectList.filter(item=>item.id===event.target.value);
    if (listItem) {
    dispatch(searchFromGenre(event.target.value,listItem.name));
    navigate("/searching");
    }
    else {
      dispatch(searchFromGenre('',''));
    }
  }

  const listId = useSelector((state)=>{
    const {searchReducer} = state;
    return searchReducer.genryId;
  })

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

export default SearchGenrySelect;