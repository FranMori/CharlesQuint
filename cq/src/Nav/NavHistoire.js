import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function NavHistoire () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
        <div className="row">
      <a href="/histoire/heretiques"><Button className='p-3' variant='warning'>Charles-Quint et les hérétiques</Button></a> 
      <a href="/histoire/legende_realite">   <Button className='p-3' variant='warning'>Charles-quint à Beaumont, légende ou réalité ?</Button></a> 
      <a href="/histoire/lettre_Charles"> <Button className='p-3' variant='warning'>Lettre à Charles de Croÿ</Button></a> 
      </div>
      <div className="row">
      <a href="/histoire/lettre_Marie"> <Button className='p-3' variant='warning'>Lettre à Marie de Hongrie</Button></a> 
      <a href="/histoire/pendaison"> <Button className='p-3' variant='warning'>La pendaison</Button></a> 
      <a href="/histoire/pot_Walcourt"> <Button className='p-3' variant='warning'>Le pot de Charles-Quint à Walcourt</Button></a> 
      <a href="/histoire/reconstitutions">  <Button className='p-3' variant='warning'>Les diverses reconstitutions</Button></a> 
      </div>

      </div>
      <div className="bottom0">
      <Footer />
      </div>
    </div>
  )
}

export default NavHistoire