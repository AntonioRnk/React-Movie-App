import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorPage from "./pages/ActorPage/ActorPage";
import InputSearch from "./components/UI/InputSearch/InputSearch";
import MovieListGenre from "./pages/GenrePage/MovieListGenre";
import MovieListMain  from './pages/MainPage/MovieListMain';
import MoviePage from "./pages/MoviePage/MoviePage";
import SearchSelect from "./components/UI/SearchSelect/SearchSelect";
import { getGenreFullList } from "./API/getGenreFullList";
import 'normalize.css';
import './style/App.scss';


function App() {

  const [search, SetSearchRezult] = useState([]);
  const [genreList, SetGenreList] = useState([]);

  function searchListElements(list){
    return SetSearchRezult(list);
  }

  useEffect(()=>{
    getGenreFullList().then(rezult=>{
      SetGenreList(rezult);
    })
  },[])


  return (
    <div className="app">
     <header className="app__header">
      <InputSearch handleSearch={searchListElements}/>
     </header>
     <div className="app__inner">
      <div className="app__left">
        <h3>Параметри пошуку:</h3>
        <SearchSelect nameList={'Жанри'} selectList ={genreList} route={'/genre/'} />
        <SearchSelect nameList={'Жанри'} selectList ={genreList} route={'/genre/'} />
      </div>
      <div className="app__right">
      <Routes>
        <Route path="/" element={<MovieListMain searchList={search}/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/genre/:id/:name" element={<MovieListGenre/>} />
        <Route path="/actor/:id" element={<ActorPage />} />
      </Routes>
      </div>
     </div>
    </div>
  );
}

export default App;
