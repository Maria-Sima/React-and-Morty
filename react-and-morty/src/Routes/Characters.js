
import {useCharacters, useLocations} from "../api/useData";
import React, {useEffect, useState} from "react";
import "../App.css";
import Cards from "../Components/Cards";
import Pagination from "../Components/Pagination";


const Characters = () => {
const [pageNumber,setPageNumber]=useState(1)
    // const [loading,setLoading]=useState(true);
    const characters = useCharacters(pageNumber);
    const [char,setChar]=useState(characters)
    let {info,results}=characters;

const handleScroll=async ()=>{
    if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
        setPageNumber(prev=>prev+1)
        await setChar(prev=>[...prev,characters])
        // setLoading(true)
        console.log(char)
    }
}
useEffect(()=>{
    window.addEventListener('scroll',handleScroll)


    return ()=>window.removeEventListener('scroll',handleScroll)
},[])
    return <div className="App">
        <div className="col-8">
            <div className="row">
                {results?.map(character=>{
                    return <Cards character={character}  />
                })}
            </div>
        </div>

          <Pagination pageNumber={pageNumber} info={info} setPageNumber={setPageNumber} />
    </div>

};

export default Characters;