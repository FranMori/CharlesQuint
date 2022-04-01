import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function NavHistoire () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
      <a href="/histoire/anecdotes"> <Button className='p-3' variant='warning'>Anecdotes</Button></a> 
      <a href="/histoire/autres"> <Button className='p-3' variant='warning'>Autres légends de Charles-Quint</Button></a> 
      <a href="/histoire/reconstitutions">  <Button className='p-3' variant='warning'>Histoire d'une reconstitution</Button></a> 
      </div>
      <div className="bottom0">
      <Footer />
      </div>
    </div>
  )
}

export default NavHistoire