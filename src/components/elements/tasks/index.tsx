import { FC } from 'react'
import { useSelector } from 'react-redux'
import { tasksArray } from 'redux/selectors'
import Task from './task'
import './style.less'

export interface ITasksArrayElement {
  id: number
  value: string
}

const TasksList: FC = (): JSX.Element => {
  const tasksList = useSelector(tasksArray)

  return (
    <div className="containerTasks">
      {tasksList.map((task: ITasksArrayElement) => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  )
}

export default TasksList
