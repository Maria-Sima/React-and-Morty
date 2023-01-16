import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <img id="anchor" src="react-and-morty/public/images/Yp1I.gif"></img>
               <div className="eyes">
                   <img className="eye" alt=""/>
               </div>
        <Link to={`characters`}>
            <button className="glow-on-hover" type="button">Characters</button></Link>
    <Link to={`locations`}>
            <button className="glow-on-hover" type="button">Locations</button></Link>
           </>

    );
};

export default Home;