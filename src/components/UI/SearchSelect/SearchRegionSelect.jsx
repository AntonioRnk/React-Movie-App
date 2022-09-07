import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import styles from './SearchSelect.module.scss';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { searchFromRegion } from '../../../redux/actions';

const SearchRegionSelect = ({nameList, selectList}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function changeHande(event){
    const [listItem] = selectList.filter(item=>item.iso_3166_1===event.target.value);
    if (listItem) {
        dispatch(searchFromRegion(event.target.value,listItem.native_name));
        navigate("/searching");
        }
        else {
          dispatch(searchFromRegion('',''));
          navigate("/");
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
            return <MenuItem key={item.iso_3166_1} value={item.iso_3166_1}>{item.native_name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchRegionSelect;