import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'; 

const CardList = ({cardList})=>{
    
    const [cardsList, setCardsList] = useState([]);

    useEffect(()=>{
        setCardsList(cardList);
    },[cardList]);
   
    return(
        <div className="row">
            {
                cardsList.map(({id, name, addedDate})=>{
                    return(
                        <div key ={id} className="col m4">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
                                    <p><Link to={`/card/${id}`}>Details</Link></p>
                                    <span className="text">{addedDate}</span>
                                </div>
                            </div>
                        </div>
                    );
                }
                )   
            }
        </div>
    );
}
export default CardList;