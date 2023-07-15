import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { isTaskExist } from 'utils'
import { addTask } from 'redux/reducers'
import { tasksArray } from 'redux/selectors'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ITask } from 'components/tasksList/task/index.types'
import Button from 'components/button'
import MainInput from 'components/mainInput'

const createTaskPannel = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const tasksList = useAppSelector(tasksArray)

  const taskItem: ITask = {
    id: Math.random(),
    value: value,
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const onKeyChange = (e: KeyboardEvent): void => {
    const isAlreadyExist = isTaskExist(tasksList, value)
    if (e.key === 'Enter') {
      if (!isAlreadyExist && !!value) {
        dispatch(addTask(taskItem))
        setValue('')
      }
    }
  }

  const onAddTaskHandle = (): void => {
    const isAlreadyExist = isTaskExist(tasksList, value)
    if (!isAlreadyExist && !!value) {
      dispatch(addTask(taskItem))
      setValue('')
    }
  }

  return (
    <>
      <MainInput onChange={onChange} onKeyChange={onKeyChange} value={value} classProperties="input" placeholderText="Добавьте задачу в свой личный план" typeInput="type"/>
      <Button
        title="Добавить"
        className="button"
        handleClick={onAddTaskHandle}
      />
    </>
  )
}

export default createTaskPannel
