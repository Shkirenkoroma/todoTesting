import { ITask } from 'components/tasksList/task/index.types'

export const isTaskExist = (tasksList: ITask[], value: string) => {
  return tasksList.some((task) => task.value === value)
}
