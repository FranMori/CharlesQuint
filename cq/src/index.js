import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './index.css';
import App from './App';

import PickPhoto from './photos/pickPhoto'
import Photos from './photos/photos'

import Comite from './infos pratiques/Comite'

import CQBMT from "./de l'histoire à la légende/1549"
import Militaire from "./de l'histoire à la légende/militaire"
import Pendaison from "./de l'histoire à la légende/pendaison"
import LettreCharles from "./de l'histoire à la légende/lettreCharles"
import LettreMarie from "./de l'histoire à la légende/lettreMarie"
import Heretiques from "./de l'histoire à la légende/heretiques"
import Stocquarts from "./de l'histoire à la légende/stocquarts"
import Gagnolets from "./de l'histoire à la légende/gagnolets"

import Aigle from "./de l'histoire à la légende/Aigle/aigle"
import AiglePhotos from "./de l'histoire à la légende/Aigle/aiglePhotos"

import Erreurs from "./de l'histoire à la légende/Cortege/erreurs"


import Ballon from "./Petits bouts d'histoire/anecdotes/ballon"
import Roy from "./Petits bouts d'histoire/anecdotes/roy"
import Chance from "./Petits bouts d'histoire/anecdotes/chance"
import Fables from "./Petits bouts d'histoire/anecdotes/fables"

import Reconstitutions from "./Petits bouts d'histoire/reconstitutions" 
import CarnavalBinche from "./Petits bouts d'histoire/autres/carnavalBinche"
import CarteVisite from "./Petits bouts d'histoire/autres/carteVisite"
import Chocolat from "./Petits bouts d'histoire/autres/chocolat"
import CoinBalai from "./Petits bouts d'histoire/autres/coinBalai"
import Fouettard from "./Petits bouts d'histoire/autres/fouettard"
import Horloge from "./Petits bouts d'histoire/autres/horloge"
import Karreveld from "./Petits bouts d'histoire/autres/karreveld"
import Louvain from "./Petits bouts d'histoire/autres/louvain"
import Pot from "./Petits bouts d'histoire/autres/pot"
import Savetier from "./Petits bouts d'histoire/autres/savetier"
import Trek from "./Petits bouts d'histoire/autres/trek"


import NavHistoire from "./Nav/NavHistoire"
import NavHistoireAnecdotes from "./Nav/NavHistoireAnecdotes"
import NavHistoireAutres from "./Nav/NavHistoireAutres"
import NavLegende from "./Nav/NavLegende"
import NavAigle from "./Nav/NavAigle"
import NavCortege from "./Nav/NavCortege"
import NavPhotos from "./Nav/NavPhotos"

ReactDOM.render(
  <Router>
     <Routes>
       <Route path='/' element={<App />} />
       
       <Route path= '/galerie' element={<NavPhotos />} />
        <Route path = '/galerie/:id' element={<PickPhoto />} />
          <Route path = '/galerie/1884' element = {<Photos />} />
          <Route path = '/galerie/1930' element = {<Photos />} />
          <Route path = '/galerie/1980' element = {<Photos />} />
          <Route path = '/galerie/1985' element = {<Photos />} />
          <Route path = '/galerie/1990' element = {<Photos />} />
          <Route path = '/galerie/1995' element = {<Photos />} />
          <Route path = '/galerie/2000' element = {<Photos />} />
          <Route path = '/galerie/2005' element = {<Photos />} />
          <Route path = '/galerie/2010' element = {<Photos />} />
          <Route path = '/galerie/2015' element = {<Photos />} />


       <Route path='/infos' element={<Comite />} />

        <Route path ='/legende' element = {<NavLegende />} />
          <Route path ='/legende/1549' element = {<CQBMT />} />
          <Route path ='/legende/aigle' element = {<NavAigle />} />
            <Route path ='/legende/aigle/erection' element = {<Aigle />} />
            <Route path ='/legende/aigle/photos' element = {<AiglePhotos />} />
          <Route path ='/legende/lettreMarie' element = {<LettreMarie />} />
          <Route path ='/legende/lettreCharles' element = {<LettreCharles />} />
          <Route path ='/legende/historiquePendaison' element = {<Pendaison />} />
          <Route path ='/legende/confreries' element = {<Militaire />} />
          <Route path ='/legende/stocquarts' element = {<Stocquarts />} />
          <Route path ='/legende/gagnolets' element = {<Gagnolets />} />
          <Route path ='/legende/heretiques' element = {<Heretiques />} />
          <Route path ='/legende/cortege' element = {<NavCortege />} />
            <Route path ='/legende/cortege/erreurs' element = {<Erreurs />} />

        <Route path = '/histoire' element = {<NavHistoire />} />
            <Route path = '/histoire/reconstitutions' element= {<Reconstitutions />} />
            <Route path = '/histoire/anecdotes' element = {<NavHistoireAnecdotes />} />
                <Route path = '/histoire/anecdotes/ballon' element ={<Ballon />} />
                <Route path = '/histoire/anecdotes/roy' element ={<Roy />} />
                <Route path = '/histoire/anecdotes/chance' element ={<Chance />} />
                <Route path = '/histoire/anecdotes/fables' element ={<Fables />} />
             <Route path = '/histoire/autres' element = {<NavHistoireAutres />} />   
              <Route path = '/histoire/autres/carnaval' element = {<CarnavalBinche />} />   
              <Route path = '/histoire/autres/carte' element = {<CarteVisite />} />   
              <Route path = '/histoire/autres/chocolat' element = {<Chocolat />} />   
              <Route path = '/histoire/autres/balai' element = {<CoinBalai />} />   
              <Route path = '/histoire/autres/fouettard' element = {<Fouettard />} />   
              <Route path = '/histoire/autres/horloge' element = {<Horloge />} />   
              <Route path = '/histoire/autres/karreveld' element = {<Karreveld />} />   
              <Route path = '/histoire/autres/louvain' element = {<Louvain />} />   
              <Route path = '/histoire/autres/pot' element = {<Pot />} />   
              <Route path = '/histoire/autres/savetier' element = {<Savetier />} />   
              <Route path = '/histoire/autres/trek' element = {<Trek />} />   
              
        <Route path = '/stocquarts' element = {<Stocquarts />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


