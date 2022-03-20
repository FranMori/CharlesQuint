import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './index.css';
import App from './App';

import PickPhoto from './photos/pickPhoto'
import Photos1930 from './photos/1930'

import Comite from './infos pratiques/Comite'

import CQBMT from "./de l'histoire à la légende/CQ"
import Militaire from "./de l'histoire à la légende/militaire"
import Aigle from "./de l'histoire à la légende/aigle"

import Pot from "./Petits bouts d'histoire/pot"
import Pendaison from "./Petits bouts d'histoire/pendaison"
import LettreCharles from "./Petits bouts d'histoire/lettreCharles"
import LettreMarie from "./Petits bouts d'histoire/lettreMarie"
import Heretiques from "./Petits bouts d'histoire/heretiques"
import Reconstitutions from "./Petits bouts d'histoire/reconstitutions" 
import LegendeRealite from "./Petits bouts d'histoire/legendeRealite"

import NavHistoire from "./Nav/NavHistoire"

import Stocquarts from "./les 12 bourgies Stocquarts/stocquarts"

ReactDOM.render(
  <Router>
     <Routes>
       <Route path='/' element={<App />} />
       <Route path= '/galerie' element={<Photos1930 />} />
        <Route path = '/galerie/:id' element={<PickPhoto />} />
       <Route path='/infos' element={<Comite />} />
        <Route path ='/legende' element = {<Aigle />} />
        <Route path = '/histoire' element = {<NavHistoire />} />
            <Route path = '/histoire/heretiques' element= {<Heretiques />} />
            <Route path = '/histoire/legende_realite' element= {<LegendeRealite />} />
            <Route path = '/histoire/lettre_Charles' element= {<LettreCharles />} />
            <Route path = '/histoire/lettre_Marie' element= {<LettreMarie />} />
            <Route path = '/histoire/pendaison' element= {<Pendaison />} />
            <Route path = '/histoire/pot_Walcourt' element= {<Pot />} />
            <Route path = '/histoire/reconstitutions' element= {<Reconstitutions />} />



        <Route path = '/stocquarts' element = {<Stocquarts />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


