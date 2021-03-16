import React, {useState, useEffect} from 'react';
import './card-detail.css';
import CardService from '../../service/spring-service';
import {Link, Redirect} from 'react-router-dom';

const CardDetail = ({id}) => {
    const [name, setName] = useState('');
    const [addedDate, setAddedDate] = useState('');
    const [cardDeleted, setCardDeleted] = useState(false)

    async function deleteCard() {
        CardService.deleteCard(id);
        setCardDeleted(true)
    }

    useEffect(() => {

        CardService.getCardById(id)
            .then(({data}) => {
                setName(data.name);
                console.log(data);
                setAddedDate(data.addedDate);
            });
    }, [id]);
    return (
        <>
            {cardDeleted ? <Redirect to={'/all'} exact/> : (
                <div className="card" style={{width: '100%'}}>
                    <div className="card-content">
                        <span className="card-title">{name}</span>
                        <p>{addedDate}</p>
                    </div>
                    <div className="card-action ">
                        <Link to={`/edit/${id}`}><span className={'btn'}>EDIT</span></Link>
                        <span className={'btn btn-danger'} onClick={deleteCard}>Delete</span>

                    </div>
                    <Link className="btn btn-primary" to="/all">Back to Home</Link>
                </div>
            )}
        </>
    )
};
export default CardDetail;