import { FC } from 'react';
import { tasksArray } from 'redux/selectors';
import { useAppSelector } from 'hooks';
import { ITask } from 'redux/reducers/index.types';
import Task from './task';
import './style.less';

const TasksList: FC = (): JSX.Element => {
  const tasksList = useAppSelector(tasksArray);

  return (
    <div className="containerTasks">
      {tasksList.map((task: ITask) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
