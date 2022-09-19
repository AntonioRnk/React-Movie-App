import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import styles from './SearchSelect.module.scss';
import { useDispatch} from "react-redux/es/exports";
import { searchPage } from '../../../redux/actions';

const SearchSelect = ({nameList,selectList,action,value,index,current}) => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  function changeHande(event){
    dispatch(searchPage(1));
    const [listItem] = selectList.filter(item=>item[index]===event.target.value);
    if (listItem) {
        dispatch(action(event.target.value,listItem[value]));
          navigate("/searching");
        }
        else {
          dispatch(action('',''));
      }
  }

  return (
    <div className={styles.selectForm}>
      <FormControl className={styles.selectInner} variant="filled" sx={{ m: 1, width: '100%' }}>
        <InputLabel>{nameList}</InputLabel>
        <Select
          value={current[index]}
          onChange={changeHande}
          className ={styles.select}
        >
          <MenuItem value=''>
            <em>Не вибрано</em>
          </MenuItem>
          {selectList && selectList.map(item=>{
            return <MenuItem key={item[index]} value={item[index]}>{item[value]}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchSelect;