import React,{useState, useEffect} from 'react';
import CardService from '../../service/spring-service';
import { useHistory } from "react-router-dom";

const EditPage = ({id})=>{
    let history = useHistory();
    const [name, setName] = useState('');
    const [addedDate, setAddedDate] = useState('');
    
    useEffect(()=>{

        CardService.getCardById(id)
            .then(res=>{
                if(res.status===200){
                    const {name, addedDate} = res.data;
                    setName(name);
                    setAddedDate(addedDate);
                }
            })
    },[id]);

    const OnEdit = (e)=>{

        e.preventDefault();
        const newCard = {
            id,
            name
        };

        CardService.editCard(newCard).then(res=>{if(res.status===200){
            history.push("/all");
        }});
    }

    return(
    <div className="card" style={{width:'100%'}}>
        <form onSubmit={OnEdit}>
            <div className="input-field ">
                <input placeholder="Name"  type="text" value={name}  onChange={(e)=>{
                        setName(e.target.value);
                    }} />
            </div>
            <div className="input-field ">
                <input placeholder="Date"  type="text" disabled value={addedDate}
                />
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <button className="btn waves-effect waves-light" type="submit">Edit</button>
            <button className="btn waves-effect waves-light" onClick={()=>{
                history.push('/all');
            }}>Back</button>
            </div>
        </form>
        
    </div>
    );
};
export default EditPage;