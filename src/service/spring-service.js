import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
  });
class CardService {
     getCards(){
        return  instance.get('/cards');
    }
     addNewCard(card){
        return  instance.post('/addCard', card);
    }
     getCardById(id){
        return instance.get('/card/'+id)
    }
     getCardTasksById(id){
         return instance.get('/cardTasks/'+id);
     }
     changeDoneInTask(id){
         return instance.put('/cardTask/'+id);
     }
     addCardTask(id,cardTask){
        return  instance.post('/addCardTask/'+id, cardTask);
    }
     deleteCard(id){
         instance.delete('/card/'+id);
     }
     

}
export default new CardService();