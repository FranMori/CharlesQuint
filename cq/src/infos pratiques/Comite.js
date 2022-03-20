import Header from "../Home/Header"
import Footer from "../Home/Footer"

import photoPresident from '../assets/comite/president.jpg'
import photoTresorier from '../assets/comite/tresorier.png'
import photoSecretaire from '../assets/comite/secretaire.jpg'
import photoLogistique from '../assets/comite/Logistique.png'
import photoBudget from '../assets/comite/budget.png'
import photoFranche from '../assets/comite/FrancheFoire.png'
import photoCortege from '../assets/comite/Cortege.png'
import photoAnimations from '../assets/comite/Animations.png'
import photoAnimations2 from '../assets/comite/Animations2.png'
import photoAnimations3 from '../assets/comite/Animations3.jpg'
import photoWebmaster from '../assets/comite/Webmaster.png'
import photoAssurances from '../assets/comite/Assurances.jpg'
import photoCom from '../assets/comite/Com.png'
import photoTribune from '../assets/comite/Tribune.png'
import photoFoire from '../assets/comite/foire.jpg'
import photoFoire2 from '../assets/comite/foire2.jpg'
import photoMembres from '../assets/logo_cq.png'
import photoSécu from '../assets/comite/Sécu.jpg'


import './infos.css'

function Comite() {
  return (
<div className="container">
  <Header />  
    <div className="comite">
     <div className="row comite__president">
       <div className="col comite__carte">
         <h3 className="comite__title">Président</h3>
         <img className="comite__img" src={photoPresident}></img>
         <h2 className="comite__name">André Toupet</h2>
       </div>
      </div>

      <div className="row">
        <div className="col comite__carte">
          <h3 className="comite__title">Trésorier</h3>
          <h3 className="comite__title">Franche Foire (artisans)</h3>
          <img className="comite__img" src={photoTresorier}></img>
          <h2 className="comite__name">Michel Loewer</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Secrétaire</h3>
          <h3 className ="comite__title">Organisation générale</h3>
          <img className="comite__img" src={photoSecretaire}></img>
          <h2 className="comite__name">Jean-Valère Moriamé</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Logistique</h3>
          <h3 className ="comite__title">Bivouac</h3>
          <img className="comite__img" src={photoLogistique}></img>
          <h2 className="comite__name">Robert Boiteux</h2>
        </div>
      </div> 

      <div className="row">
        <div className="col comite__carte">
          <h3 className="comite__title">Budget</h3>
          <h3 className="comite__title">Comptabilité</h3>
          <img className="comite__img" src={photoBudget}></img>
          <h2 className="comite__name">Fabian Boiteux</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Franche Foire (artisans)</h3>
          <h3 className ="comite__title">Sponsoring et publicités</h3>
          <img className="comite__img" src={photoFranche}></img>
          <h2 className="comite__name">Geoffrey Borgniet</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title__tresorier">Cortege</h3>
          <img className="comite__img" src={photoCortege}></img>
          <h2 className="comite__name">Jacques Moriamé</h2>
        </div>
      </div>

      <div className="row">
        <div className="col comite__carte">
          <h3 className="comite__title">Animations</h3>
          <h3 className="comite__title">Spectacles</h3>
          <img className="comite__img" src={photoAnimations}></img>
          <h2 className="comite__name">Olivier Rogien</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Animations</h3>
          <h3 className="comite__title">Spectacles</h3>
          <img className="comite__img" src={photoAnimations2}></img>
          <h2 className="comite__name">Vincent Dinjar</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Animations</h3>
          <h3 className="comite__title">Spectacles</h3>
          <img className="comite__img" src={photoAnimations3}></img>
          <h2 className="comite__name">Christophe Hublet</h2>
        </div>
      </div>

      <div className="row">
        <div className="col comite__carte">
          <h3 className="comite__title">Webmaster</h3>
          <h3 className="comite__title">Reseaux Sociaux</h3>
          <img className="comite__img" src={photoWebmaster}></img>
          <h2 className="comite__name">Stéphane Lust</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Secrétaire-Adjoint</h3>
          <h3 className="comite__title">Assurances</h3>
          <img className="comite__img" src={photoAssurances}></img>
          <h2 className="comite__name">Laurent Minsier</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Communication</h3>
          <h3 className="comite__title">Sonorisation</h3>
          <img className="comite__img" src={photoCom}></img>
          <h2 className="comite__name">Lucile Loewer</h2>
        </div>
      </div>

      <div className="row">
        <div className="col comite__carte">
          <h3 className="comite__title">Tribune et VIP</h3>
          <img className="comite__img" src={photoTribune}></img>
          <h2 className="comite__name">Charleen Boiteux</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Franche Foire (artisans)</h3>
          <img className="comite__img" src={photoFoire}></img>
          <h2 className="comite__name">Emilie Moriamé</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Franche Foire (artisans)</h3>
          <img className="comite__img" src={photoFoire2}></img>
          <h2 className="comite__name">Isabelle Petit</h2>
        </div>
      </div>

      <div className="row">
        <div className="col comite__carte">
          <h3 className="comite__title">Membres</h3>
          <img className="comite__img" src={photoMembres}></img>
          <h2 className="comite__name">Frédéric Chrétien</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Membres</h3>
          <img className="comite__img" src={photoMembres}></img>
          <h2 className="comite__name">Claire Moriamé</h2>
        </div>
        <div className="col comite__carte">
          <h3 className="comite__title">Membres</h3>
          <img className="comite__img" src={photoMembres}></img>
          <h2 className="comite__name">Mathieu Solbreux</h2>
        </div>
      </div>

      <div className="row comite__president">
       <div className="col comite__carte">
         <h3 className="comite__title">Sécurité (Gardes du Guet)</h3>
         <img className="comite__img" src={photoSécu}></img>
         <h2 className="comite__name">Stefano Piesch</h2>
       </div>
      </div>



      
      

      

    </div>
  <Footer />  
</div>

  )
}

export default Comite