import React,{Component, Fragment} from  'react';
import {Link} from "react-router-dom";
import MyNavbar from "../components/common/navbar.js"

class Home extends Component{
    navigateTo = () =>{
        console.log(this.props);
        this.props.history.push("/tictactoe"   )
    }
    render(){

        return(
            <Fragment>
                <MyNavbar />
                <h1>Home</h1>
                <Link to={"project"} >Go to Projects</Link> 
                                <button onClick={this.navigateTo}>Tic Tac Toe</button>
            </Fragment>
        )
    }
}

export default Home;