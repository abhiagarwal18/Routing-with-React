import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import MyNavbar from "../components/common/navbar"
import Content from '../content/index'

const styles ={
    homeFront:{
        marginTop :80
    }
}

class PropertyDescription extends Component{
    constructor(props){
        super(props);
        this.state={
            description:{}
        }
    }
    componentDidMount(){
        let id= this.props.match.params.id
        let filteredArray = Content.properties.filter((data,index)=>{
            return data.id ===id 
        })
        this.setState({description:filteredArray[0]})
    }
    render(){
        console.log(this.state.description.name)
        console.log(this.props.match.params.id)
        return(
            <Fragment>
                <MyNavbar/>
                <Grid container style={styles.homeFront}>
                    {Object.keys(this.state.description).length>0 ?<h1>{this.state.description.name}</h1>:null}
                </Grid>

            </Fragment>
        )
    }

}
export default PropertyDescription;