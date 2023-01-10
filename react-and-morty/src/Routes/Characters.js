
import {useCharacters, useLocations} from "../api/useData";
import React, {useEffect, useState} from "react";
import "../App.css";
import Cards from "../Components/Cards";
import Pagination from "../Components/Pagination";


const Characters = () => {
const [pageNumber,setPageNumber]=useState(1)
//     const [search,setSearch]=useState('')
//     const [characters,setCharacters] = useState(pageNumber);
//
// let api=`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
//     useEffect(()=>{
//         (async function(){
//             let data=await fetch(api).then(res=>res.json()).catch(err=>console.error(err))
//             setCharacters(data)
//             console.log(data.results)
//         })()
//     },[api])
//     console.log(results)
    const characters = useCharacters(pageNumber);
    const locations = useLocations(1);
    let {info,results}=characters;
    // console.log("Characters data: ");
    // console.log(results);
    // console.log("Locations data: ");
    // console.log(locations);

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