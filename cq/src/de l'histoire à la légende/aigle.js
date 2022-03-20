import Header from "../Home/Header"
import Footer from "../Home/Footer"

import aigle1 from "../assets/autres/aigle1.jpg"

function Aigle () {
  return(
    <div>
      <Header />
      <div>
        <h2 className="titre bloc">L'érection de l'aigle doré</h2>
        <div className="bloc imgBloc">
          <img src={aigle1}></img>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Aigle