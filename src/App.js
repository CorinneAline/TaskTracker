import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'
import About from './components/About';
import TaskTracker from "./components/TaskTracker";


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className='container-md'>
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          <Routes>
            <Route path='/' element={<TaskTracker showAddTask={showAddTask} />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  )
}

export default App;
