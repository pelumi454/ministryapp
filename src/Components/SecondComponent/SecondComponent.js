import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
import './SecondComponent.css'

class SecondComponent extends Component {
    render() {
        return (
            <div className="showmore">
                 <ShowMoreText
            line = {1}
            more = {<><span>Show More</span><i class="fas-fa-caret-down ml-1"></i></>}
            less = {<><span>Show Less</span><i class="fas-fa-caret-up ml-1"></i></>}
            className="content-css more-info"
            anchorClass = "my-anchor-css-class"
             onClick={this.executeClick}
            expand={false}
            width={20}
            >
                <div className="show-more">
                    <div className="address-info">
                    <div className="address text-left mr-3 pt-2">Address: {this.props.address}</div>  
                    </div>
                    <div>
                        <p className="address-info"> Web: <a href={this.props.web}>{this.props.web}</a></p>
                    </div>
                </div>
           
            </ShowMoreText>
            </div>
        )
    }
}

export default SecondComponent

