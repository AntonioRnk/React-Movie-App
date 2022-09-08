import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorPage from "./pages/ActorPage/ActorPage";
import MovieListGenre from "./pages/GenrePage/MovieListGenre";
import MovieListMain  from './pages/MainPage/MovieListMain';
import MoviePage from "./pages/MoviePage/MoviePage";
import SearchGenrySelect from "./components/UI/SearchSelect/SearchGenrySelect";
import { getGenreFullList } from "./API/getGenreFullList";
import 'normalize.css';
import './style/App.scss';
import Header from "./components/UI/Header/Header";
import { getAllRegion } from "./API/getAllRegion";
import SearchRegionSelect from "./components/UI/SearchSelect/SearchRegionSelect";
import RangeSlider from "./components/UI/RangeSlider/RangeSlider";


function App() {

  const [genreList, SetGenreList] = useState([]);
  const [regionList, SetRegionList] = useState([]);
  
  useEffect(()=>{
    getGenreFullList().then(rezult=>{
      SetGenreList(rezult);
    })
    getAllRegion().then(rezult=>{
      SetRegionList(rezult);
    })
  },[])
 
  return (
    <div className="app">
      <Header/>
     <div className="app__inner">
      <div className="app__left">
        <h3>Параметри пошуку:</h3>
        <SearchGenrySelect nameList={'Жанр'} selectList ={genreList} />
        <SearchRegionSelect nameList={'Мова оригіналу'} selectList ={regionList} />
        <RangeSlider/>
      </div>
      <div className="app__right">
      <Routes>
        <Route path="/" element={<MovieListMain/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/searching" element={<MovieListGenre/>} />
        <Route path="/actor/:id" element={<ActorPage />} />
      </Routes>
      </div>
     </div>
    </div>
  );
}

export default App;
