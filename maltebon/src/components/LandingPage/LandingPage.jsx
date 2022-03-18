import React, { Component } from 'react';
import { Box, Grid, Hidden, Paper, Typography, Toolbar, AppBar, TextField, Avatar } from "@material-ui/core";
import Navbar from '../Navbar/Navbar';
import Typed from 'react-typed';
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer';

const styles = {
    heroContainer: {
      height: '100vh',
      backgroundImage: `url(${"https://images.hdqwalls.com/wallpapers/bio-hackers-and-the-matrix-4k-6p.jpg"})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%'
    }
   };
class LandingPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <Grid container direction="column-reverse" justify="flex-end" alignItems="right" style={styles.heroContainer} >
                    <Grid item>
                        <Hidden mdDown>
                            <Typography variant='h4' style={{margin:"10% 10hw"}}>
                                <br/>
                                <Typed style={{color:"white", position: 'absolute', left: '82%', top: '48%', transform: 'translate(-50%, -50%)' }} strings={["Amateurs hack SYSTEMS, Professionals hack YOOOOUUU :)", "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!", "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!"]} typeSpeed={50} backSpeed={100}/>
                                <br/>
                                <br/>
                                <Typed style={{color:"white", position: 'absolute', left: '48%', top: '55%', transform: 'translate(-50%, -50%)', fontWeight:"bold"  }} strings={["WHERE ???", "WHEN ???", "WHAT ???", "HOW ???", "WHO ???"]} typeSpeed={100} backSpeed={120} loop/>
                                <Typed style={{color:"green", fontSize:"10vh" , position: 'absolute', left: '65%', top: '45%', transform: 'translate(-50%, -50%)', fontWeight:"bold" }} strings={["?"]} />
                            </Typography>
                        </Hidden>
                        <Hidden mdUp>
                            <Typography variant='h4' style={{margin:"10% 10hw"}}>
                                <Typed style={{color:"white", position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }} strings={["Amateurs hack SYSTEMS, Professionals hack YOOOOUUU :)", "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!", "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!"]} typeSpeed={50} backSpeed={100}/>
                            </Typography>
                        </Hidden>
                    </Grid>
                    <Grid item>
                        <Button type="button" variant="contained" style={{borderRadius:"20px", color:"white", background:"green", position: 'absolute', left: '25%', top: '80%', transform: 'translate(-50%, -50%)', padding:"3vh 5vw", fontSize:"2vh"}}>
                            GET STARTED
                        </Button>
                        <Button type="button" variant="contained" style={{borderRadius:"20px", color:"white", background:"green", position: 'absolute', left: '25%', top: '91%', transform: 'translate(-50%, -50%)', padding:"3vh 5vw", fontSize:"2vh"}}>
                            Maltebon ??
                        </Button>
                    </Grid>
                </Grid>
                <Footer/>
            </div>

        );
    }
}
 
export default LandingPage;