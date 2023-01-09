import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const CardInfo = () => {
    let [fetchedData,setFetch]=useState([])
    let {name,image,location,origin,gender,species,status}=fetchedData;
    let {id}=useParams()
    let api=`https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=> {
        (async function () {
            let data = await fetch(api).then(res => res.json()).catch(err => console.error(err))
            setFetch(data)
            console.log(data.results)
        })()
    },[api])

    return (
        <div>
            <img src={image} alt=""></img>
            <div>{name}</div>
            {/*<div>{location.name}</div>*/}
                <div>{gender}</div>
                {/*<div>{origin.name}</div>*/}
                <div>{species}</div>
                <div>{status}</div>

            
        </div>
    );
};

export default CardInfo;