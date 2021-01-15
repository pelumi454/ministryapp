import React, { Component } from 'react'
import MainComponent from '../MainComponent/MainComponent'
import axios from 'axios'


class Ministries extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }
    }

    componentDidMount (){
        axios.get('https://arcane-ocean-74071.herokuapp.com/ministries/')
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
        // const {items} = this.state
        return (
            <div>
                {
                   this.state.items.map(item => (
                        <MainComponent item={item}  />
                    ))
                }
            </div>
        )
    }
}

export default Ministries


