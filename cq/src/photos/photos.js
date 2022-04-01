import { Component} from 'react'

import Header from '../Home/Header'
import Footer from '../Home/Footer'

import PhotoItems from './objet'


class Photos extends Component {
  constructor() {
    super()
    this.state = {justDate: ""}
    this.state = {urlPhoto: ""}
    this.state = {id: ""}
    this.state = {lienImage: ""}
    this.state = {date: ""}
  }
  componentDidMount() {
    
    const url = window.location.pathname
    const justDate = parseInt((url.split('/')[2]))
    this.setState({justDate})

    PhotoItems.map((val)=> {
      let id = val.id
      let urlPhoto = val.url
      let lienImage = "/galerie/:" + (val.id)
      let date = val.date
      this.setState({id})
      this.setState({urlPhoto})
      this.setState({lienImage})
      this.setState({date})

    }) 
  }
  render() {
    return (
      <div>
        <Header />
 <h2 className='titre bloc'>Photos {this.state.justDate}</h2>
        <div className='bloc bloc__photo'>
         {this.state.date === this.state.justDate &&
            <div key={this.state.id}>
              <a href={this.state.lienImage}>
              <img className='photo' alt='Photo Charles-Quint' src={this.state.urlPhoto}></img>
              </a>
            </div>
          }
        </div>
        <Footer />
      </div>
  
    )
  }
  }
   

export default Photos