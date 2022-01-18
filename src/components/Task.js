import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`row m-3 p-3 bg-gray bg-gradient ${task.reminder ? 'border-start border-success border-5' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <div className="col-11">
                <h3>{task.text}</h3> 
                <p>{task.day}</p>
            </div>
            <div className="col-1">
                <FaTimes 
                    style={{color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(task.id)} 
                    className="pull-right"
                />
            </div>
        </div>
    )
}

export default Task
