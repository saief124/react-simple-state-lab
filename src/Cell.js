import React, {Component} from 'react'

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
          color: props.value
        }
      }
    handleClick = () =>{
        let coolColor='#333'
        this.setState({
            color: coolColor
        })
    }
    render(){
    return (
        <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
        </div>
    )
    }
}

