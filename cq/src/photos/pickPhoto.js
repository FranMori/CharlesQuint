import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

import PhotoItems from './objet'



class PickPhoto extends Component {
  constructor() {
    super()
    this.state = { justUrl: "" };
    this.state = { nextUrl: "" };
    this.state = { previousUrl: "" };
    this.state = { date: "" };
    
  }
  componentDidMount() {
    const url = window.location.pathname
    const justId = parseInt((url.split(':')[1]))
    const idPreviousPhoto = (justId -1)
    const idNextPhoto = (justId +1)
    const nextUrl = url.replace((url.split(':')[1]), idNextPhoto)
    this.setState({nextUrl})
    const previousUrl = url.replace((url.split(':')[1]), idPreviousPhoto)
    this.setState({previousUrl})  



    function specificId(photo) {
      return photo.id === justId
    }
  

    let justUrl = (PhotoItems.find(specificId).url)
    let date = (PhotoItems.find(specificId).date)
    console.log(date)
    this.setState({date})
    this.setState({justUrl})

  }  
  
  
  render() {
    return (
  <div>
      <a href='/galerie'>
      <div className='pickPhoto'>
        <h1>Photos de {this.state.date}</h1>
        <div className='arrowLeft'>
        <a href={this.state.previousUrl}>
      <FontAwesomeIcon size='6x' color='white' icon={faAngleLeft} />
        </a>
      </div>
        <div className='arrowRight'>
          <a href={this.state.nextUrl}>
        <FontAwesomeIcon size='6x' color='white'  icon={faAngleRight} />
          </a>
        </div>
      </div>
    </a>
    <div className='absolutePhoto'>
        <img className="bigPhoto" alt="Charles-Quint" src={`/${this.state.justUrl}`}></img>
    </div>
  </div>  

    )
  }
}


export default PickPhoto