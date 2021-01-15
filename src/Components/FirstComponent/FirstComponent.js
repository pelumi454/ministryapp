import React from 'react'
import './FirstComponent.css'
import logo from '../../img/img1.png'

const FirstComponent = (props) => {
    return (
        <div className="first-info ml-5">
        <div className='title row pt-5'>
            <div className="img-title img">
            <img src={logo} className="text-left"></img>
            </div>
           <div className="text-left ml-3"><h1>{props.item.name}</h1></div>
        </div>
        <div className="pt-4">
          <div className="minister-name text-left"><strong>Minister:</strong> {props.item.minister}</div>  
        </div>
        <div className="minister-name text-left pt-3"><strong>Minister of State:</strong> {props.item.minister_state}</div>
        <div className="hr-line"><hr/></div>
        </div>
    )
}

export default FirstComponent
