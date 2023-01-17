import { useEffect, useState, useRef } from "react";
import './Characters.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

import Cards from "../Components/Cards";


const Characters = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState([])
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const LoadCharacters = async () => {
            
            const newCharacters = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`).then(res=>res.json()).catch(err=>console.error(err));
            setCharacters( characters.concat(newCharacters.results));
            
            if(pageNumber === newCharacters.info.pages){
                 setHasMore(false);
            }
        }


        LoadCharacters();
    }, [pageNumber])
   
    return( 
            <>
                <InfiniteScroll
                    dataLength={characters.length}
                    next={() => { setPageNumber(pageNumber+1)}} 
                    hasMore={hasMore}
                >
                    <div className="characters-wrapper">
                        {characters?.map((character) => {
                            return <Cards className='characters-items' key={character.id} character={character} />
                        })}
                    </div>
                </InfiniteScroll>
            </>
    )
}

export default Characters;