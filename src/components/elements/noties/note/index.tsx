import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, saveNoties } from 'redux/reducers';
import Button from 'components/button';
import EditInput from 'components/elements/edit';
import {  IPropsNote } from 'types';
import './style.less';

const Note: FC<IPropsNote> = ({ item, specificId }): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false);
  const [valueEdit, setValueEdit] = useState<string>(item);
  const dispatch = useDispatch();

  const notiesItem = {
    id: specificId,
    value: valueEdit,
  };

  const editItem = (): void => {
    setEdit(!edit);
  };

  const deleteItem = (): void => {
    dispatch(deleteNote(item));
  };

  const saveEdit = (): void => {
    setEdit(!edit);
    dispatch(saveNoties(notiesItem));
  };

  return (
    <div className="container__note">
      {edit ? (
        <EditInput
          value={valueEdit}
          onChange={setValueEdit}
        />
      ) : (
        <div className="container____content__note">
          <span className="container__content__note-text">{item}</span>
        </div>
      )}
      <div className="container____content__buttons">
        <Button
          className="button__delete"
          handleFunction={deleteItem}
          buttonName="Удалить"
        />
        {edit ? (
          <Button
            className="button"
            handleFunction={saveEdit}
            buttonName="Сохранить"
          />
        ) : (
          <Button
            className="button"
            handleFunction={editItem}
            buttonName="Редактировать"
          />
        )}
      </div>
    </div>
  );
};

export default Note;
