import React, { Component } from 'react'
import './FirstComponent.css'
import logo from '../../img/img1.png'

class FirstComponent extends Component {
    render() {
        return (
            <div>
                 <div className="first-info ml-5">
        <div className='title row pt-5'>
            <div className="img-title img">
            <img src={logo} className="text-left"></img>
            </div>
           <div className="text-left ml-3"><p className="ministry-name">{this.props.name}</p></div>
        </div>
        <div className="pt-4">
          <div className="minister-name text-left"><strong>Minister:</strong> {this.props.minister}</div>  
        </div>
        <div className="minister-name text-left pt-3"><strong>Minister of State:</strong> {this.props.minister_state}</div>
        </div>
            </div>
        )
    }
}

export default FirstComponent

