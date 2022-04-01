import Header from "../Home/Header"
import Footer from "../Home/Footer"

import Button from 'react-bootstrap/Button'

function Anecdotes () {
  return (
    <div>
      <Header />
      <div className="bloc navBloc">
        <a href='/histoire/anecdotes/ballon'><Button className="p3" variant="warning">Le ballon et les Tchots</Button></a>
        <a href='/histoire/anecdotes/roy'><Button className="p3" variant="warning">Vive le Roy !</Button></a>
        <a href='/histoire/anecdotes/chance'><Button className="p3" variant="warning">Une chance de pendu !</Button></a>
        <a href='/histoire/anecdotes/fables'><Button className="p3" variant="warning">Fables anciennes</Button></a>
      </div>
      <Footer />
    </div>
  )
}

export default Anecdotes