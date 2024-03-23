import React,{useState} from 'react';

const Form =()=>{
    const [addTodo,setAddTodo]=useState({title:'',desc:''});
    const {title,desc}=addTodo;
    return <form>
        <div>
            <label htmlFor='title'>Title: </label>
            <input name='title' value={title} />
        </div>
        <div>
            <label htmlFor='desc'>Description: </label>
            <input name='desc' value={desc} />
        </div>
        <button>Add</button>
    </form>
}

export default Form;