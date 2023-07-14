import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote, saveNoties } from 'redux/reducers'
import Button from 'components/button'
import EditInput from 'components/elements/edit'
import './style.less'

export interface IPropsNote {
  item: string
  specificId: number
}

const Note: FC<IPropsNote> = ({ item, specificId }): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false)
  const [valueEdit, setValueEdit] = useState<string>(item)
  const [checked, setChecked] = useState<boolean>(false)
  const dispatch = useDispatch()

  const notiesItem = {
    id: specificId,
    value: valueEdit,
  }

  const editItem = (): void => {
    setEdit(!edit)
  }

  const deleteItem = (): void => {
    dispatch(deleteNote(item))
  }

  const saveEdit = (): void => {
    setEdit(!edit)
    dispatch(saveNoties(notiesItem))
  }

  const completeTask = (): void => {
    setChecked(!checked)
  }

  return (
    <div className="container__note">
      {edit ? (
        <EditInput value={valueEdit} onChange={setValueEdit} />
      ) : (
        <div className="container____content__note">
          <span className={checked ? "linethrough" : "container__content__note-text"}>{item}</span>
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
          handleClick={deleteItem}
          buttonName="Удалить"
        />
        {edit ? (
          <Button
            className="button"
            handleClick={saveEdit}
            buttonName="Сохранить"
          />
        ) : (
          <Button
            className="button"
            handleClick={editItem}
            buttonName="Редактировать"
          />
        )}
      </div>
    </div>
  )
}

export default Note
