import React, {useEffect, useState} from 'react';
import {useLocations} from "../api/useData";
import Cards from "../Components/Cards";
import {useParams} from "react-router-dom";

const LocationInfo = () => {
        let [info,setInfo]=useState([])
        let [results,setResults]=useState([])
        let {id}=useParams()
        let api=`https://rickandmortyapi.com/api/location/${id}`

        useEffect(()=> {
            (async function () {
                let data = await fetch(api).then(res => res.json()).catch(err => console.error(err))
                setInfo(data)
                console.log(data)
                // console.log(data.residents)
                let a=await Promise.all(
                    data?.residents.map((x)=>{
                        return fetch(x)
                            .then((res)=>res.json())})
                )
                setResults(a)

                // console.log(results)

            })()
        },[api])
console.log(results)

        return (
            <div>
                {results?.map(character=>{
                    return <Cards character={character}  />
                })}


            </div>
        );
    };

export default LocationInfo;