import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

import './Locations.scss'

const LocationInfo = () => {
    const [info,setInfo]=useState([])
    const {name, type, dimension}=info;
    const {id}=useParams()
    const api=`https://rickandmortyapi.com/api/location/${id}`

    useEffect(()=> {
        (async function () {
            let data = await fetch(api).then(res => res.json()).catch(err => console.error(err))
            setInfo(data)
        })()
    },[api])

        return (
            <div>
                <img src={require(`../images/rick-and-morty-${Math.floor(Math.random() * 10) + 1}.png`)} alt=""></img>
                <div>{name}</div>
                <div>{type}</div>
                <div>{dimension}</div>
            </div>
        );
    };

export default LocationInfo;