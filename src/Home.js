import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import homeBackground from './backgrounds/homepage.webp';


function Home() {
    const { user } = useContext(UserContext);

    const hasPlants = user?.plants?.length > 0;

    return (
        <div className="homepage">
            <img
                src={homeBackground}
                style={{ width: "100vw", height: "100vh" }}
                className="home-pic"
                alt="my-home-pic"
            />
            <div className="home-text">
                <h3 style={{
                    textAlign: "center",
                    position: "relative",
                    left: "40px",
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                }}>
                    {!hasPlants ? (
                        <>
                            <h2>
                                Hey {user?.first_name},<br /><br />
                                Welcome to Sprout!<br /><br />
                                You currently have no plants in your garden.<br />
                                <Link to="/browse" style={{ color: "#b18597" }}>Click Here</Link> to add some.
                            </h2>
                        </>
                    ) : (
                        <>
                            <h2>
                                Welcome back {user?.first_name}!<br /><br />
                                Check your care calendar{" "}
                                <Link to="/care" style={{ color: "#b18597", transform: "scale(1.5)", transition: "transform 500ms ease" }}>
                                    here
                                </Link>{" "}
                                for updates!<br /><br />
                                Adopt a new plant? Add it to your virtual garden{" "}
                                <Link to="/browse" style={{ color: "#b18597", transform: "scale(1.5)", transition: "transform 500ms ease" }}>
                                    here
                                </Link>
                            </h2>
                        </>
                    )}
                </h3>
            </div>
        </div>
    );
}

export default Home;
