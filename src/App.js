import { Routes, Route } from "react-router-dom";
import ActorPage from "./pages/ActorPage/ActorPage";
import MovieListSearch from "./pages/SearchPage/MovieListSearch";
import MovieListMain  from './pages/MainPage/MovieListMain';
import MoviePage from "./pages/MoviePage/MoviePage";
import 'normalize.css';
import './style/App.scss';
import Header from "./components/UI/Header/Header";
import LeftApp from "./components/UI/LeftApp/LeftApp";


function App() {

  return (
    <div className="app">
      <Header/>
     <div className="app__inner">
      <LeftApp/>
      <div className="app__right">
      <Routes>
        <Route path="/" element={<MovieListMain/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/searching" element={<MovieListSearch/>} />
        <Route path="/actor/:id" element={<ActorPage />} />
      </Routes>
      </div>
     </div>
    </div>
  );
}

export default App;
