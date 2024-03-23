import React from 'react';
import Todos from './Todos'

const dummyTodos = [
    {
        title:"Todo title one",
        desc:"This is the description of todo title one."
    },
    {
        title:"Todo title two",
        desc:"This is the description of todo title two."
    },
    {
        title:"Todo title three",
        desc:"This is the description of todo title three."
    },
    {
        title:"Todo title four",
        desc:"This is the description of todo title four."
    }
]

const Home =()=>{
    return <div>
        <Todos todos={dummyTodos}/>
    </div>
}

export default Home;