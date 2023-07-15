import { ITask } from 'redux/reducers/index.types';

export const isTaskExist = (tasksList: ITask[], value: string): boolean => {
  return tasksList.some((task) => task.value === value);
};
