 interface IStateNoties {
  id: number
  value: string
}

 interface INoties {
  noties: Array<IStateNoties>
}

 interface IState {
  noties: INoties
}

export const noties = (state: IState) => state?.noties?.noties ?? []
