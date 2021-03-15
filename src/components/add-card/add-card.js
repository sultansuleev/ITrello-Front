import React, {useState} from 'react';
import './add-card.css';



const AddCard = ({addCard})=>{
    
    const [name, setName] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        const dateObj = new Date();
        let month = dateObj.getMonth()+1;
        if(month<10){
            month='0'+ month;
        }
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        let hours = dateObj.getHours();
        if(hours<10){
            hours='0'+ hours;
        }
        let minutes = dateObj.getMinutes();
        if(minutes<10){
            minutes='0'+ minutes;
        }
        const output = day+'.'+month+'.'+year+' '+hours+':'+minutes;
        const newItem = {
            name,
            addedDate:output
        }
        addCard(newItem);
        setName('');
    }


    return(
        <div className="card">
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="input-field ">
                <input placeholder="Create new card"  type="text" className="validate" 
                    onChange={(e)=>{
                        setName(e.target.value)}} value={name}/>
                    </div>
                <button className="btn waves-effect waves-light" type="submit">ADD NEW +
                </button>        
            </form>
        </div>
    );
};
export default AddCard;