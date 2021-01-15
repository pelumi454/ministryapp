import React, { Component } from 'react'
import FirstComponent from '../FirstComponent/FirstComponent'
import SecondComponent from '../SecondComponent/SecondComponent'
import './MainComponent.css'


class MainComponent extends Component {
    

    render() {
        
        return (
            
                <div>
               <FirstComponent
               name={this.props.item.name}
                minister={this.props.item.minister}
               minister_state={this.props.item.minister_state}
               />
               <SecondComponent
               address={this.props.item.address}
               web={this.props.item.website}
               />
               <hr/>
                </div>
        )
    }
}

export default MainComponent
