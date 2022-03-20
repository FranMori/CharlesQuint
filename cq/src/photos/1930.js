import { Component} from 'react'

import Header from '../Home/Header'
import Footer from '../Home/Footer'

import PhotoItems from './objet'

class Photos1930 extends Component {
  render() {
    return (
      <div>
        <Header />
 <h2 className='titre bloc'>Photos 1930</h2>
        <div className='bloc bloc__photo'>
          {PhotoItems.map((val, key) => {
            let id = val.id
            let url = val.url
            let lienImage = "/galerie/:" + (val.id)
            return <div key={id}>
              <a href={lienImage}>
              <img className='photo' alt='Photo Charles-Quint' src={url}></img>
              </a>
            </div>
          })}
        </div>
        <Footer />
      </div>
  
    )
  }
  }
   

export default Photos1930