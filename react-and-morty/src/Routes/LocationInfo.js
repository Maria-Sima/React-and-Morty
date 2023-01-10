import React, {useEffect, useState} from 'react';
import {useLocations} from "../api/useData";
import Cards from "../Components/Cards";

const LocationInfo = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const locations = useLocations(pageNumber); // "loading"

    let {info,results}=locations; // info = undefined / results = undefined
    // let {residents}=results; // undefined.residents

    (async function (){
      await results?.map(location=>{
          let {residents}=location;
          console.log(residents)

          })
    }())
    return (

            <div className="row">
                {results?.map(location=>{
                    let {residents}=location;
                    residents?.map(resident=>{

                        return <Cards character={resident} />
                    })

                })}
            </div>

    );
};

export default LocationInfo;