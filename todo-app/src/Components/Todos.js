import React from 'react';
import Todo from './Todo';

const Todos =(props)=>{
    console.log(props)
    const {todos}=props;
    return <section>
        {todos.map((todo,index)=> <Todo todo={todo} key={index} />)}
    </section>
}

export default Todos;