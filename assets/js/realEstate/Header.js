import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'JD'
    }
  }
  render () {
    return (<header> 
        <div className='logo'>Logo</div>
        <nav>
            <a href='#'>CREATE ADS</a>
            <a href='#'>ABOUT US</a>
            <a href='#'>LOG IN</a>
            <a href='#' className="register-btn">Register</a>
        </nav>


    </header>)
  }
}

