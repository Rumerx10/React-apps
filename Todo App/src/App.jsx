import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import Todo from './components/Todo';




function App() {
  const [todo,setTodo] = useState([
    {id:1, title:'Task One', status: false},
    {id:2, title:'Task Two', status: false},
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask=()=>{
    if(newTask){
      let num = todo.length+1;
      const newTodo = {'id':num, 'title':newTask, 'status':false}
      setTodo((prev)=> [...prev, newTodo]);
      setNewTask('');
    }
  }

  const deleteTask=(id)=>{
    let filteredTodo = todo.filter((task)=> task.id!==id);
    setTodo(filteredTodo);
  }

  const markDone=(id)=>{
    let doneTask = todo.map((task)=>{
      if(task.id===id){
        return ({...task, status:!task.status})
      }
      return task;
    })
    setTodo(doneTask);
  }

  const cancelUpdate=()=>{
    setUpdateData('');
  }

  const changeTask=(e)=>{
    let newTask = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status
    }
    setUpdateData(newTask);
  }

  const updateTask=()=>{
    let filteredTodo = [...todo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filteredTodo, updateData];
    setTodo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className='app'>
      <h2 className='text-center'>Todo List </h2>
      <br /> <br />
      {updateData && updateData 
        ? (<UpdateForm updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate} />)
        : (<AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />)
      }
    
      {todo && todo.length ? '':'No Tasks...'}
      <Todo todo={todo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />
    </div>
  )
}

export default App
