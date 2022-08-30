import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorPage from "./components/ActorPage/ActorPage";
import InputSearch from "./components/UI/InputSearch/InputSearch";
import MovieListGenre from "./components/MovieListGenre";
import MovieListMain  from './components/MovieListMain';
import MoviePage from "./components/MoviePage";
import './styles/App.scss';

function App() {

  const [search, SetSearchRezult] = useState([]);

  function searchListElements(list){
    return SetSearchRezult(list);
  }

  return (
    <div className="App">
    <header className="App-header">
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
