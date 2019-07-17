import React , {Fragment, Component} from "react";
import {Link} from "react-router-dom";

class Project extends Component {
    render(){
        return(
            <Fragment>
                <h1>Projects</h1>
                <Link to={"tictactoe"} >Go to Tictactoe</Link>
                <br/> 
                <Link to= {"calculator"}>Go to the Calculator</Link>
                <br/>
                <Link to= {"oyo"}>Go to the Oyo Rooms Page</Link>
            </Fragment>
        )
    }
}

export default Project;