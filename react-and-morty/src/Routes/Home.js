import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
        <Link to={`characters`}>
            <button className="glow-on-hover" type="button">Characters</button></Link>
    <Link to={`locations`}>
            <button className="glow-on-hover" type="button">Locations</button></Link></>

    );
};

export default Home;