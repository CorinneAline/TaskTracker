import React from 'react';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText(text);
        setDay(day);
        setReminder(reminder);
    }

    return (
        <>
            <div className='row border m-2 p-2'>
                <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label>Task</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Add Task'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label>Day</label>
                        <input type='text' 
                            className='form-control' 
                            placeholder='Add Day'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <input type='checkbox' 
                            className='form-check-input' 
                            value={reminder}
                            onChange={(e) => setReminder(e.currentTarget.checked)}
                        />
                        <label><span className='ml-1'> Add Reminder</span></label>
                    </div>
                    <input type='submit' value='Save Task' className='btn btn-block btn-success' />
                </form>
            </div>
        </>
        
        
    )
}

export default AddTask
