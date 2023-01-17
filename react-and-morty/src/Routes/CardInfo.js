import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const CardInfo = () => {
    let [info,setInfo]=useState([])
    let {name,image,gender,species,status}=info;
    let {id}=useParams()
    let api=`https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=> {
        (async function () {
            let data = await fetch(api).then(res => res.json()).catch(err => console.error(err))
            setInfo(data)
        })()
    },[api])

    return (
        <div key={id}>
            <img src={image} alt=""></img>
            <div>{name}</div>
            <div>{gender}</div>
            <div>{species}</div>
            <div>{status}</div> 
        </div>
    );
};

export default CardInfo;