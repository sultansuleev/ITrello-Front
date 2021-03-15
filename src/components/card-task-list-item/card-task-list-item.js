import React,{useState} from 'react';
import CardService from '../../service/spring-service';

const CardTaskListItem=({taskText, done, addedDate, id})=>{

    const [isDone, setIsDone] = useState(done);
    
    const changeDone = ()=>{
        
        CardService.changeDoneInTask(id)
            .then(res=>{
                if(res.status===200){
                setIsDone(!isDone);}
            });
    }

    return(
        <div className="card">
            <div className="card-content">
                <span className="card-title">{taskText}</span>
                <p>{addedDate}</p>
            </div>
            <div className="card-action">
            <div className="switch">
                <label>
                Done
                <input type="checkbox" checked={isDone} onChange={()=>changeDone()
                }/>
                <span className="lever"></span>
                </label>
            </div>
            </div>
        </div>
    );
};
export default CardTaskListItem;