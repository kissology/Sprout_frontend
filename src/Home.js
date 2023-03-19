

import React, {useContext} from 'react';
import { UserContext } from './Context/UserContext';
import { Link } from "react-router-dom";




function Home() {
const { user } = useContext(UserContext);

function hasPlants(){
    if(user.plants.length <= 0){
        return <h2>Hey {user.first_name},<br></br><br></br>Welcome to Sprout!<br></br><br></br>You currently have no plants in your garden<br></br> <Link exact path to="/browse" style={{"color": "#b18597"}}>Click Here</Link> to add some.</h2>
    } else {
        if(user.plants.length > 0)
        return <h2>Welcome back {user.first_name}! 
        <br></br><br></br>
        Check your care calendar <Link exact path to="/care" style={{"color": "#b18597", "transform": "scale(1.5)", "transition": "transform 500ms ease"}}>here</Link> for updates!
        <br></br><br></br>
        Adopt a new plant? Add it to your virtual garden <Link exact path to="/browse" style={{"color": "#b18597", "transform": "scale(1.5)", "transition": "transform 500ms ease"}}>here</Link></h2>
    }
}

    return (
        <div className="homepage">
        <img src={require('./backgrounds/homepage.webp')} style={{"width": "100vw", "height": "100vh" }} className ="home-pic" alt="my-home-pic" />
        <div className="home-text">
        <h3 style={{"text-align": "center", "position": "relative", "left":"40px", "font-family": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>{hasPlants()}</h3>
        </div>
        </div>
    
    )
}

export default Home;