import React, {useState, useEffect} from 'react';
import CardService from '../../service/spring-service';
import CardList from '../card-list';
import AddCard from '../add-card/';
import Filter from "../filter/filter";
import {useCookies} from "react-cookie";


const CardsPage = () => {
    const [cardList, setCardList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("");

    const updateData= async () => {
        let jwtToken = localStorage.getItem("token");

        await CardService.getCards(jwtToken)
            .then(res=>{
                setCardList(res.data)
                setLoading(false);
            });
    }

    useEffect(()=>{
        updateData();
    },[ ]);

    function updateState(s) {
        setCardList(s);
    }

    return (
        <>
            <div className="addForm">
                <Filter cardList={cardList} updateState={updateState}/>
            </div>
            <div className="addForm">
                <AddCard addCard={(card) => {
                    setLoading(true);
                    CardService.addNewCard(card)
                        .then(res => {
                            if (res.status === 200) {
                                updateData();
                            }
                        });
                }}/>
            </div>
            {loading ? <h1>loading...</h1> : <CardList cardList={cardList}/>}
        </>
    )
};
export default CardsPage;