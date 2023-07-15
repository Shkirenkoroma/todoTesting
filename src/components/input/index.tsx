import { FC, KeyboardEvent, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskToState } from 'redux/reducers'
import { tasksArray } from 'redux/selectors'
import Button from 'components/button'
import './style.less'

export interface IPropsInput {
  setTasks: (e: string) => void
  tasks: string
}

const Input: FC<IPropsInput> = ({
  setTasks,
  tasks,
}): JSX.Element => {
  const tasksList = useSelector(tasksArray)
  const dispatch = useDispatch()

  const taskItem = {
    id: Math.random(),
    value: tasks,
  }

  const inputTask = (e: ChangeEvent<HTMLInputElement>): void => {
    setTasks(e.target.value)
  }

  const addTask = () => {
    const isAlreadyExist = tasksList.some(
      (task) => task.value === tasks,
    )
    if (!isAlreadyExist && !!tasks) {
      dispatch(addTaskToState(taskItem))
    }  
  }

  const handleChange = (e: KeyboardEvent): void => {
    const isAlreadyExist = tasksList.some(
      (task) => task.value === tasks,
    )
    if (e.key === 'Enter') {
      if (!isAlreadyExist && !!tasks) {
        dispatch(addTaskToState(taskItem))
      } 
    }
  }

  return (
    <>
      <input
        className="input"
        type="text"
        onChange={inputTask}
        onKeyPress={handleChange}
        placeholder="Добавьте задачу в свой личный план"
      />
      <Button
        handleClick={addTask}
        className="button"
        buttonName="Добавить"
      />
    </>
  )
}

export default Input
