import React,{Component, Fragment} from  'react';
import {Link} from "react-router-dom";
import MyNavbar from "../components/common/navbar.js"

class Home extends Component{
    /*navigateTo = () =>{
        console.log(this.props);
        this.props.history.push("/tictactoe"   )
    }*/
    render(){

        return(
            <Fragment>
                <MyNavbar />
                <h1>Home</h1>
                <Link to={"projects"} >Go to Projects</Link> 
            </Fragment>
        )
    }
}

export default Home;