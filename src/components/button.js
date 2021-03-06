import React, {Component, Fragment} from 'react';
class Button extends Component{
    constructor(props){
        super(props);
        this.state={
            label:"LOGIN"
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick=()=>{
        this.props.handleClick(this.props.label)
    }
    render(){
        return(
            <Fragment>
                <button onClick={this.handleClick} style={{color: this.props.color, padding:10}}>{this.props.label}</button>
                
            </Fragment>
        )
    }
}
export default Button;