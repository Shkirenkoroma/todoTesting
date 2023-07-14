export interface IState {
  noties: { noties: string[] }
}
export const noties = (state: IState) => state.noties.noties;
