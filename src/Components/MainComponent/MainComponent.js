import React, { Component } from 'react'
import FirstComponent from '../FirstComponent/FirstComponent'
import SecondComponent from '../SecondComponent/SecondComponent'
import axios from 'axios'

class MainComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }
    }

    componentDidMount (){
        axios.get('https://ministries.herokuapp.com/ministries/?format=json')
        .then(res=> {
            const items = res.data
            console.log(items)
             this.setState({
                items: items
              })
     
        })
        .catch(error => {
            console.log(error)
        })
          
        }
    
    render() {
        const {items} = this.state
        return (
            <div>
                <div>
                {
                        items.map(item => (
                            <FirstComponent item={item}  />
                        ))
                    } 
                </div>
                
                <div>
                {
                        items.map(item => (
                            <SecondComponent item={item}  />
                        ))
                    } 
                </div>
                

                    
            </div>
        )
    }
}

export default MainComponent
