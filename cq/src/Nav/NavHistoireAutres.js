import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function Autres () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
        <a href='/histoire/autres/carnaval'><Button className="p3" variant="warning">Le Carnaval de Binche</Button></a>
        <a href='/histoire/autres/carte'><Button className="p3" variant="warning">La carte de visite de Charles-Quint</Button></a>
        <a href='/histoire/autres/chocolat'><Button className="p3" variant="warning">Charles-Quint et le chocolat</Button></a>
        <a href='/histoire/autres/balai'><Button className="p3" variant="warning">Charles-Quint et le "Coin du Balai"</Button></a>
        <a href='/histoire/autres/fouettard'><Button className="p3" variant="warning">Le Père Fouettard</Button></a>
        <a href='/histoire/autres/horloge'><Button className="p3" variant="warning">Charles-Quint et la grande horloge</Button></a>
        <a href='/histoire/autres/karreveld'><Button className="p3" variant="warning">Le Karreveld</Button></a>
        <a href='/histoire/autres/louvain'><Button className="p3" variant="warning">Charles-Quint et les étudiants de Louvain</Button></a>
        <a href='/histoire/autres/pot'><Button className="p3" variant="warning">Le pot de Charles-Quint</Button></a>
        <a href='/histoire/autres/savetier'><Button className="p3" variant="warning">Charles-Quint et le savetier</Button></a>
        <a href='/histoire/autres/trek'><Button className="p3" variant="warning">De Trek van Keizer Karel</Button></a>


      </div>
      <Footer />
    </div>
  )
}

export default Autres