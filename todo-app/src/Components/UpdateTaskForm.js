import React from 'react';

const UpdateTaskForm = ({updateData,changeTask,updateTask,cancelUpdate}) => {
  return (
    <>
          {/* update todo..................... */}
        <div>
          <div className='Form'>
            <input  
              type='text' 
              name='title'
              value={updateData?.title} 
              onChange={(e)=>changeTask(e)}
            />
            <button
              className='updateBtn'
              onClick={updateTask}
            >Update</button>
            <button  className='cancelBtn' onClick={cancelUpdate}>Cancel</button>
          </div>
        </div>
        </>
  );
}

export default UpdateTaskForm;
