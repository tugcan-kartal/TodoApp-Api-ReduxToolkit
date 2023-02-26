import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import { fetchTodos } from './todoSlice';

const TodoView = () => {

    const dispatch=useDispatch(); 
    const todoData=useSelector((state)=>state.todoReducer);     //burda store'dan çekiyoruz selector ile store u incele

    useEffect(()=>{
        dispatch(fetchTodos());
    },[]);

  return (
    <div>
        {todoData.loading && "fetching data"}
        {todoData.error && "Hatali fetching" }
        {todoData.todos.length>0 &&             //todoSlice da sen statelerini yani gelen datayı todos adlı dizide tutuyorsun artık store ile sen slice dosyasına bağlandın sonra da dizinin ismine bağlandın burda
            todoData.todos.map((task,key)=>(
                <div key={key}>
                    <br />
                    <h3>{task.title}</h3>
                    <h5>{task.id}</h5>
                    <br />
                </div>
            ))
        }
    </div>
  )
}

export default TodoView