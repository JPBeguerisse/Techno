import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/app.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import TechnoAdd from './pages/TehnoAdd';
import TechnoList from './pages/TechnoList';
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function App() {
  //Liste qui regroupe toutes les technos
  const [technoList, setTechnoList] = useState([]);

  //mettre la liste des technos à jour lorsqu'une nouvelle techno a été ajouté sur la liste au niveau de techno add
  const handleAddTechno = (newTechno) => {
    setTechnoList((technoList) => [...technoList, {...newTechno, id: uuidv4()}]) // prends la liste précédente et y rajoute une nouvelle techno à chaque ajout
  }

  function handleDeleteTechno(id)
  {
    setTechnoList(technoList.filter((tech) => tech.id !== id))
  }
  return (
    <Router>
      <div>
        <Menu/>
        <Routes>
          {/* Définissez vos routes à l'intérieur de <Routes> */}
          <Route path="/" element={<Home />} />
          {/* passé la prop handleAddTechno au composant TechnoAdd en lui assignant la valeur de votre fonction handleAddTechno */}
          <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
          <Route path="/list" element={<TechnoList technoList={ technoList } handleDeleteTechno={ handleDeleteTechno }/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
