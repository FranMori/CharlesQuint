import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function NavPhotos () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
      <a href="/galerie/1884"> <Button className='p-3' variant='warning'>Photos du cortège de 1884</Button></a> 
      <a href="/galerie/1930"> <Button className='p-3' variant='warning'>Photos du cortège de 1930</Button></a> 
      <a href="/galerie/1980"> <Button className='p-3' variant='warning'>Photos du cortège de 1980</Button></a>
      <a href="/galerie/1985"> <Button className='p-3' variant='warning'>Photos du cortège de 1985</Button></a> 
      <a href="/galerie/1990"> <Button className='p-3' variant='warning'>Photos du cortège de 1990</Button></a> 
      <a href="/galerie/1995"> <Button className='p-3' variant='warning'>Photos du cortège de 1995</Button></a> 
      <a href="/galerie/2000"> <Button className='p-3' variant='warning'>Photos du cortège de 2000</Button></a> 
      <a href="/galerie/2005"> <Button className='p-3' variant='warning'>Photos du cortège de 2005</Button></a> 
      <a href="/galerie/2010"> <Button className='p-3' variant='warning'>Photos du cortège de 2010</Button></a> 
      <a href="/galerie/2015"> <Button className='p-3' variant='warning'>Photos du cortège de 2015</Button></a> 
 
      </div>
      <div className="bottom0">
      <Footer />
      </div>
    </div>
  )
}

export default NavPhotos