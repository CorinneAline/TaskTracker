import React from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'A thing to do',
            day: 'Feb 5th',
            reminder: false,
        },
        {
            id: 2,
            text: 'Another thing to do',
            day: 'Feb 6th',
            reminder: true,
        },

    ]
  )

  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task ))
  }

  return (
    <div className='container-md'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        { tasks.length > 0 ? <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show' }
    </div>
  );
}

export default App;
