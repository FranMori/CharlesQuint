import { Component } from 'react'

import Header from '../Home/Header'
import Footer from '../Home/Footer'

import PhotoItems from './objet'



class PickPhoto extends Component {
  componentDidMount() {
const url = window.location.pathname
const justId = parseInt((url.split(':')[1]))

function specificId(photo) {
  return photo.id === (justId)
}
let justUrl = (PhotoItems.find(specificId).url)
console.log(justUrl)
  }
  render() {

    return (
      <div>
      <Header />
      <div>
      <h1>{this.justId}</h1>
        <img className="bigPhoto" alt="Charles-Quint" src={this.justUrl}></img>
      </div>
      <Footer />
    </div>

    )
  }
}


export default PickPhoto