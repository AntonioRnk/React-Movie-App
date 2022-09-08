import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import styles from './SearchSelect.module.scss';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { searchFromRegion, searchPage } from '../../../redux/actions';

const SearchRegionSelect = ({nameList, selectList}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function changeHande(event){
    dispatch(searchPage(1));
    const [listItem] = selectList.filter(item=>item.iso_639_1===event.target.value);
    if (listItem) {
        dispatch(searchFromRegion(event.target.value,listItem.english_name));
        navigate("/searching");
        }
        else {
          dispatch(searchFromRegion('',''));
      }
  }

  const listId = useSelector((state)=>{
    const {searchReducer} = state;
    return searchReducer.regionId;
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
            return <MenuItem key={item.iso_639_1} value={item.iso_639_1}>{item.english_name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchRegionSelect;