import React, {useState, useEffect} from 'react';
import CardDetail from '../card-detail/card-detail';
import CardTasksList from '../card-tasks-list';
import AddCard from '../add-card';
import CardService from '../../service/spring-service';

const CardDetailsPage = ({id}) => {
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const updateData=()=>{
        CardService.getCardTasksById(id)
            .then(res=>{
                if(res.status===200){
                setLoading(false);
                setTasks(res.data);
            }
            })
    }
    useEffect(()=>{
        updateData();
    },[ ]);

    return (
    <>
        <CardDetail id={id}/>
        <div style={{width:'100%'}}>
        <AddCard addCard={(task)=>{
                setLoading(true);                                    
                const newItem = {
                    taskText: task.name,
                    done:false,
                    addedDate: task.addedDate
                };
                CardService.addCardTask(id,newItem)
                    .then(res=>{
                        if(res.status===200){
                            updateData();
                    }}
                    )
                    }
                }
                    />
        </div>
        {loading?<h1>loading...</h1>:<CardTasksList tasks={tasks}/>
}

    </>
    )
};
export default CardDetailsPage;