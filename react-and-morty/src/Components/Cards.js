import {Link} from "react-router-dom";
import './Cards.scss';

const Cards = ({character}) => {
    let{id,name,image,location,species}=character;
    return (
                 <div 
                 style={{
                     backgroundImage: `url(${image})`
                 }}
                 className='card'
                 key={id}
                 >
                    <div className="card-content">
                    <h2 className='card-title'>{name}</h2>
                    <div className='card-body'>
                        <span className="">Species: {species}</span>
                        <div className="">Location: {location.name}</div>
                    </div>
                        <Link  
                            to={`/${id}`}
                            key={id}
                        >
                            <button className="button">More</button>
                        </Link>
                    </div>
                 </div>




    );
};

export default Cards;