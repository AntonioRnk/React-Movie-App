import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorPage from "./pages/ActorPage/ActorPage";
import InputSearch from "./components/UI/InputSearch/InputSearch";
import MovieListGenre from "./pages/GenrePage/MovieListGenre";
import MovieListMain  from './pages/MainPage/MovieListMain';
import MoviePage from "./pages/MoviePage/MoviePage";
import './style/App.scss';

function App() {

  const [search, SetSearchRezult] = useState([]);

  function searchListElements(list){
    return SetSearchRezult(list);
  }

  return (
    <div className="app">
     <header className="app__header">
      <InputSearch handleSearch={searchListElements}/>
     </header>
      <Routes>
        <Route path="/" element={<MovieListMain searchList={search}/>} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/genre/:id" element={<MovieListGenre />} />
        <Route path="/actor/:id" element={<ActorPage />} />
      </Routes>
    </div>
  );
}

export default App;
