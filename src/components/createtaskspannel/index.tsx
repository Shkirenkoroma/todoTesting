import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { addTask } from 'redux/reducers';
import { tasksArray } from 'redux/selectors';
import { useAppDispatch, useAppSelector } from 'hooks';
import { isTaskExist } from 'utils';
import Button from 'shared/button';
import Input from 'shared/input';
import { ITask } from 'redux/reducers/index.types';

const CreateTaskPannel = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const tasksList = useAppSelector(tasksArray);

  const taskItem: ITask = {
    id: Math.random(),
    value: value,
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent): void => {
    const isAlreadyExist = isTaskExist(tasksList, value);
    if (e.key === 'Enter') {
      if (!isAlreadyExist && !!value) {
        dispatch(addTask(taskItem));
        setValue('');
      }
    }
  };

  const onAddTaskHandle = (): void => {
    const isAlreadyExist = isTaskExist(tasksList, value);
    if (!isAlreadyExist && !!value) {
      dispatch(addTask(taskItem));
      setValue('');
    }
  };

  return (
    <>
      <Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        className="input"
        placeholder="Добавьте задачу в свой личный план"
        type="type"
      />
      <Button
        title="Добавить"
        className="button"
        handleClick={onAddTaskHandle}
      />
    </>
  );
};

export default CreateTaskPannel;
