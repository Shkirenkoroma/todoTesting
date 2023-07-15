 interface IStateTasks {
  id: number
  value: string
}

 interface ITasks {
  tasks: Array<IStateTasks>
}

 interface IState {
  tasks: ITasks
}

export const tasksArray = (state: IState) => state?.tasks?.tasks ?? []