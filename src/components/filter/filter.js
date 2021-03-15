import React,{useState, useEffect} from 'react';
import CardService from '../../service/spring-service';


const Filter=(props)=>{
    const [cardList, setCardList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState({});

    const updateData=()=>{
        CardService.getCards()
            .then(res=>{
                setCardList(res.data)
                setLoading(false);
            });
    }
    useEffect(()=>{
        updateData();
    },[ ]);

    const searchFilter = async e => {
        await setSearch(e.target.value);

        let searchArr = cardList.filter(team =>
            team.name.toLowerCase().includes(e.target.value.toString().toLowerCase()) == true
        );

        console.log(searchArr);

        props.updateState(searchArr);
        /*
        cardList =  props.cardList.filter(team => {

            console.log(team.name.toLowerCase() == (search.toString().toLowerCase())?"Equal":"Not Equal");
            return team.name.toLowerCase().indexOf(search.toString().toLowerCase()) !== -1;
        })

         */
    }

    return(
        <>
            <form className='p-3' style={{width: '100%'}}>
                <div className="form-group has-search" style={{position: "relative"}}>
                    <span className="fa fa-search form-control-feedback" style={{position: "absolute", top: "17px", left: "-21px"}}/>
                    <input type="text" className="form-control" placeholder="" onChange={ async (e) => { await searchFilter(e)}}/>
                </div>
            </form>
        </>
    )
};
export default Filter;