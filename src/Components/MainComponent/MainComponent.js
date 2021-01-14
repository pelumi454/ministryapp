import React, { Component } from 'react'
import FirstComponent from '../FirstComponent/FirstComponent'
import axios from 'axios'

class MainComponent extends Component {
    render() {
        return (
            <div>
                <FirstComponent/>
            </div>
        )
    }
}

export default MainComponent
