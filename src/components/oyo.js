import React,{Component,Fragment} from 'react'
import BackgroundImage from "../assets/home.jpg";
import Grid from "@material-ui/core/Grid";
import MyNavBar from "../components/common/navbar"
import DisplayCard from "../components/DisplayCard.js"
import Content from "../content"
const styles= {
    homePic:{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition :"center",
        backgroundRepeat:"no-repeat",
        height:"100vh"
    }
}

class Oyo extends Component{
   cardClick=(id)=>{
       this.props.history.push(`/propertyDescription/${id}`)
   }
    render(){
        return(
            <Fragment>
                <MyNavBar/>
                <Grid container style={styles.homePic}>
                    <Grid item  md={12}>

                    </Grid>
                </Grid>
                <Grid container>
                    {
                        Content.properties.map((data)=>{
                            return(
                                <Grid item sm ={3}>
                                    <DisplayCard data ={data} image ={BackgroundImage} cardClick={this.cardClick} />
                                    </Grid>
                            )
                        })
                        }
                </Grid>

            </Fragment>
        )
    }
}


export default  Oyo;