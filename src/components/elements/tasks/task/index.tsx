import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTaskFromState, saveTaskToState } from 'redux/reducers'
import Button from 'components/button'
import EditInput from 'components/elements/edit'
import './style.less'

export interface IPropsTask {
  task: 
  {
    value: string
    id: number
  }
}

const Task: FC<IPropsTask> = ({ task }): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false)
  const [valueEdit, setValueEdit] = useState<string>(task.value)
  const [checked, setChecked] = useState<boolean>(false)
  const dispatch = useDispatch()

  const taskItem = {
    id: task.id,
    value: valueEdit,
  }

  const editTask = (): void => {
    setEdit(!edit)
  }

  const deleteTask = (): void => {
    dispatch(deleteTaskFromState(task.value))
  }

  const saveEditTask = (): void => {
    setEdit(!edit)
    dispatch(saveTaskToState(taskItem))
  }

  const completeTask = (): void => {
    setChecked(!checked)
  }

  return (
    <div className="container__task">
      {edit ? (
        <EditInput value={valueEdit} onChange={setValueEdit} />
      ) : (
        <div className="container____content__task">
          <span
            className={
              checked ? 'linethrough' : 'container__content__task-text'
            }
          >
            {task.value}
          </span>
          <input
            type="checkbox"
            onChange={() => completeTask()}
            checked={checked}
          />
        </div>
      )}
      <div className="container____content__buttons">
        <Button
          className="button__delete"
          handleClick={deleteTask}
          buttonName="Удалить"
        />
        {edit ? (
          <Button
            className="button"
            handleClick={saveEditTask}
            buttonName="Сохранить"
          />
        ) : (
          <Button
            className="button"
            handleClick={editTask}
            buttonName="Редактировать"
          />
        )}
      </div>
    </div>
  )
}

export default Task
