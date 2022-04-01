import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function NavAigle () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
      <a href="/legende/aigle/erection"> <Button className='p-3' variant='warning'>L'érection de l'Aigle doré</Button></a> 
      <a href="/legende/aigle/photos"> <Button className='p-3' variant='warning'>Photos</Button></a> 
      </div>
      <div className="bottom0">
      <Footer />
      </div>
    </div>
  )
}

export default NavAigle