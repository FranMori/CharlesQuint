import Logo from '../assets/logo_cq.png'

import Navbar from './NavBar/NavBar'

function Header() {
  return(
   <div>
    <header className="header">
    <div>
      <h1>La légende de Beaumont en Hainaut</h1>
      <h2>Charles-Quint et les trois Auvergnats</h2>
    </div>  
      <div>
        <img src={Logo} alt ='Logo'></img>
      </div>
    </header>
    <Navbar />
    </div> 
  )
}

export default Header