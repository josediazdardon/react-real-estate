import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'JD'
    }
  }
  render () {
    return ( <section id='filter'>
        <div className='inside'>
      <h4>Filter</h4>
      <select name='neighbourhood' className='filters neighbourhood' onChange={this.props.change}>
        <option value='Seattle'>Seattle</option>
        <option value='New York'>New York</option>
        <option value="Oregon">Oregon</option>
        <option value="California">California</option>
        </select>
      <select name='housetype' className='filters housetype'>
        <option>Condo</option>
        <option>House</option>
        <option>Apartment</option>
        <option>Ranch</option>
        </select>
      <select name='bedrooms' className='filters bedrooms'>
        <option>1 BR</option>
        <option>2 BR</option>
        <option>3 BR</option>
        <option>4 BR</option>
        <option>5 BR</option>
        </select>
      <div className='filters price'>
          <span className='title'>Price</span>
        <input type='text' name='min-price' className='min-price'/>
        <input type='text' name='max-price' className='max-price'/>
      </div>
      <div className='filters floor-space'>
          <span className='title'>Floor Space</span>
        <input type='text' name='min-price' className='min-price'/>
        <input type='text' name='max-price' className='max-price'/>
      </div>
     <div className='filters extras'>
        <span className='title'>
            Extras
        </span>
         <label htmlFor='extras'>Elevators
         <input name='extras' type='checkbox' /></label>
         <label htmlFor='extras'>Storage
         <input name='extras' type='checkbox' /></label>
         <label htmlFor='extras'>Gym
         <input name='extras' type='checkbox' /></label>
         <label htmlFor='extras'>Swimming Pool
         <input name='extras' type='checkbox' /></label>
     </div>
     </div>
    </section>
    )
  }
  
}