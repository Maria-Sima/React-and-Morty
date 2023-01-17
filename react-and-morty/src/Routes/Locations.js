import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';


const Locations = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [locations, setLocations] = useState([])
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const LoadLocations = async () => {
            
            const newLocations = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`).then(res=>res.json()).catch(err=>console.error(err));
            setLocations(locations.concat(newLocations.results));
            
            if(pageNumber === newLocations.info.pages){
                 setHasMore(false);
            }
        }


        LoadLocations();
    }, [pageNumber])

    return( <>
                <InfiniteScroll
                    dataLength={locations.length}
                    next={() => { setPageNumber(pageNumber+1)}} 
                    hasMore={hasMore}
                >
                    <div className='locations-wrapper'>
                        {locations.map((location) => {
                            return  <Link key={location.id}>
                                        <div>{location.name}</div>
                                        <div>{location.type}</div>
                                    </Link>
                        })}
                    </div>
                </InfiniteScroll>
            </>
        )
};

export default Locations;