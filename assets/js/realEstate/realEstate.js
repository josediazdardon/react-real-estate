import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Listings from './Listings'
import Filter from './Filter'
import listingData from './data/listingData'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'JD',
      listingData
    }
    this.change = this.change.bind(this)
  }
  change(event){
    var name = event.target.name
    var value = event.target.value

    this.setState({
      [name]: value
    }, () =>{
      console.log(this.state)
    })
  }
  render () {
    return (<div>
         <Header />
        <section id='content-area'>
          <Filter change={this.change}/>
          <Listings listingData={this.state.listingData}/>
        </section>
       </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
