import React, {useEffect,useState} from 'react';
import Cards from "../Components/Cards";
import {useLocations} from "../api/useData";
import Pagination from "../Components/Pagination";


const Location = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const locations = useLocations(pageNumber);
    let {info,results}=locations;

console.log(results)

        return (<>
            {
                results?.map(location=>{
                    return <>
                        <div>{location.type.name}</div>
                    <div>{location.name}</div>
                    <div>{location.type}</div>
                </>

                })
            }
            <Pagination pageNumber={pageNumber} info={info} setPageNumber={setPageNumber} />
</>)
};

export default Location;