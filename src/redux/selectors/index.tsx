import { ITask } from 'redux/reducers/index.types';
import { ISelector } from './index.types';

export const tasksArray = (state: ISelector): ITask[] => state.todolist.tasks;
