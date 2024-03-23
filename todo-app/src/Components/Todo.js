import React from 'react';

const Todo=(props)=>{
    const {title,desc} = props.todo;
    return <article>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button>Delete</button>
        </div>
    </article>
}

export default Todo;