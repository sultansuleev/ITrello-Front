import React,{useState, useEffect} from 'react';
import CardTaskListItem from '../card-task-list-item';


const CardTasksList = ({tasks})=>{

    const [tasksList, setTasksList] = useState([]);

    useEffect(()=>{
        setTasksList(tasks);
    },[tasks]);

    return(
        <>
        {
        tasksList.map((task)=>{
                const {id} = task;
                return(
                    <div key={id} style={{width:'100%'}}>
                        <CardTaskListItem {...task}/>
                    </div>
                );
            })
        }

        </>
    );
};
export default CardTasksList;