import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function NavCortege () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
      <a href="/legende/cortege/description"> <Button className='p-3' variant='warning'>Description du cortège</Button></a> 
      <a href="/legende/cortege/conseils"> <Button className='p-3' variant='warning'>Quelques conseils aux participants</Button></a> 
      <a href="/legende/cortege/erreurs"> <Button className='p-3' variant='warning'>Des erreurs à ne pas commettre</Button></a> 
      <a href="/legende/cortege/parler"> <Button className='p-3' variant='warning'>Pour parler comme à l'époque</Button></a> 
      </div>
      <div className="bottom0">
      <Footer />
      </div>
    </div>
  )
}

export default NavCortege