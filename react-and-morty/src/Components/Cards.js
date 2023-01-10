import React from 'react';
import {Link} from "react-router-dom";




const Cards = ({character}) => {
    let{id,name,image,location,species,page}=character;
    // console.log(character)
    return (


            <Link className = "" to={`${id}`}
                  key={id}>
                <img className=" " src={image} alt="" />
                <div className="content">
                    <div className="">{name}</div>
                    <div className="info">
                        <div className="">Last Location</div>
                        <div className="">{location.name}</div>
                    </div>
                </div>
            </Link>



    );
};

export default Cards;