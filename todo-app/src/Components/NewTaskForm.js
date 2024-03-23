import React from 'react';

const NewTaskForm = ({newTask,setNewTask,addTask}) => {
  return (
    <>
      {/* add new todo.................... */}
      <div>
        <div className='Form'>
          <input 
            type='text'
            name='title'
            value={newTask}
            onChange={(e)=>{setNewTask(e.target.value)}}
            placeholder='Task Title...'
          />
          <button
          className='addBtn'
          onClick={addTask}
          >Add Task</button>
        </div>
      </div>
    </>
  )
}

export default NewTaskForm;
