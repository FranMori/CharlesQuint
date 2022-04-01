import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function NavLegende () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
      <a href="/legende/1549"> <Button className='p-3' variant='warning'>Venue de l'empereur à Beaumont en 1549</Button></a> 
      <a href="/legende/aigle"> <Button className='p-3' variant='warning'>L'Aigle doré</Button></a> 
      <a href="/legende/lettreMarie">  <Button className='p-3' variant='warning'>Lettre à Marie de Hongrie</Button></a>
      <a href="/legende/lettreCharles">  <Button className='p-3' variant='warning'>Lettre à Charles de Croÿ</Button></a> 
      <a href="/legende/historiquePendaison">  <Button className='p-3' variant='warning'>Historique de la pendaison</Button></a> 
      <a href="/legende/confreries">  <Button className='p-3' variant='warning'>Les Confréries militaires</Button></a> 
      <a href="/legende/stocquarts">  <Button className='p-3' variant='warning'>Les douze bourgeois Stocquarts de Solre-St-Géry</Button></a> 
      <a href="/legende/gagnolets">  <Button className='p-3' variant='warning'>Les gagnolets</Button></a> 
      <a href="/legende/heretiques">  <Button className='p-3' variant='warning'>Charles-Quint et les hérétiques</Button></a> 
      <a href="/legende/cortege">  <Button className='p-3' variant='warning'>Le cortège</Button></a> 
 
      </div>
      <div className="bottom0">
      <Footer />
      </div>
    </div>
  )
}

export default NavLegende