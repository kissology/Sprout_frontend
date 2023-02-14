import React from 'react';

function Home() {

    return (
        <div className="homepage">
        <img src={require('./backgrounds/homepage.webp')} style={{"width": "100vw"}} className ="home-pic" alt="my-home-pic" />
        <div className="home-text">
        <h2>Welcome to Sprout!</h2>
        </div>
        </div>
    
    )
}

export default Home;