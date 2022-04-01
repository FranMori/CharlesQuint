import Header from '../Home/Header'
import Footer from '../Home/Footer'

import lettrecharles1 from '../assets/autres/lettrecharles1.jpg'

function LettreCharles () {
  return (
    <div>
      <Header />
      <div>
          <h2 className='titre bloc'>Lettre à Charles de Croÿ</h2>
          <div className='bloc'>
              <p>Nous avons (après la lettre  à sa sœur Marie) retrouvé, dans des archives longtemps oubliées, une  nouvelle lettre que l'empereur Charles-Quint a écrite au seigneur de Beaumont, peu après son départ pour Binche.</p>
              <p>Décidément, les archives beaumontoises regorgent de trésors manuscrits.(1)</p>
              <div className='imgBloc'>
                <img src={lettrecharles1}></img>
              </div>
          </div>
          <div className='legende'>
          (1) « Ces lettres sont des faux ! », dénonce un historien local. Nous sommes entièrement de son avis !
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default LettreCharles