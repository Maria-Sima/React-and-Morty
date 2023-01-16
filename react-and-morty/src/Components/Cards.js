import React from 'react';
import {Link} from "react-router-dom";




const Cards = ({character}) => {
    let{id,name,image,location,species,page}=character;
    return (
                 <div style={{
                     backgroundImage: `url(${image})`
                 }}className='card'>
                   <div className="card-content">
                 <h2 className='card-title'>{name}</h2>
                  <div className='card-body'>
                      <span className="">Species: {species}</span>
                      <div className="">Location: {location.name}</div>
                  </div>
                       <Link className  to={`/${id}`}
                             key={id}><a href="#" className="button">More</a></Link>
                  </div>
                 </div>




    );
};

export default Cards;