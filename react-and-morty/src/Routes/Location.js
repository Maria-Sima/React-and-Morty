import React, {useEffect,useState} from 'react';
import {useLocations} from "../api/useData";
import Pagination from "../Components/Pagination";
import {Link} from "react-router-dom";


const Location = () => {
    const [pageNumber,setPageNumber]=useState(1)
    const locations = useLocations(pageNumber);
    let {info,results}=locations;



        return (
            <>


            {
                results?.map(location=>{
                    return <Link className = "" to={`${location.id}`}
                                   key={location.id}>
                        <div>{location.type.name}</div>
                    <div>{location.name}</div>
                    <div>{location.type}</div>
                </Link>

                })
            }

            <Pagination pageNumber={pageNumber} info={info} setPageNumber={setPageNumber} />
</>)
};

export default Location;