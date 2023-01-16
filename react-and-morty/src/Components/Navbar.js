import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const Loader = () => {
    return (
        <div className='container'>
            <div className='objects'>
                <div className="bar"></div>
                <div className="text">LOADING</div>
            </div>
        </div>
    );
};

export default Loader;