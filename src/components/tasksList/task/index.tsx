import { FC, useState } from 'react';
import { deleteTask, saveTask } from 'redux/reducers';
import { useAppDispatch } from 'hooks';
import Button from 'shared/button';
import Input from 'shared/input';
import { ITaskProps } from './index.types';
import './style.less';

const Task: FC<ITaskProps> = ({ task }): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false);
  const [valueEdit, setValueEdit] = useState<string>(task.value);
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const taskItem = {
    id: task.id,
    value: valueEdit,
  };

  const editTaskHandler = (): void => {
    setEdit(!edit);
  };

  const deleteTaskHandler = (): void => {
    dispatch(deleteTask(task.value));
  };

  const saveEditTaskHandler = (): void => {
    setEdit(!edit);
    dispatch(saveTask(taskItem));
  };

  const completeTaskHandler = (): void => {
    setChecked(!checked);
  };

  return (
    <div className="container__task">
      {edit ? (
        <Input
          value={valueEdit}
          onChange={(e) => setValueEdit(e.target.value)}
          className="editItem"
          type="type"
        />
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
            onChange={() => completeTaskHandler()}
            checked={checked}
          />
        </div>
      )}
      <div className="container____content__buttons">
        <Button
          className="button__delete"
          title="Удалить"
          handleClick={deleteTaskHandler}
        />
        {edit ? (
          <Button
            className="button"
            title="Сохранить"
            handleClick={saveEditTaskHandler}
          />
        ) : (
          <Button
            className="button"
            title="Редактировать"
            handleClick={editTaskHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
