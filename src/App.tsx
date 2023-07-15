import { FC } from 'react'
import TasksList from 'components/tasksList'
import CreateTaskPannel from 'components/createtaskspannel'
import './App.less'

const App: FC = (): JSX.Element => {

  return (
    <div className="container">
      <h1 className="container__title">Todo List</h1>
      <div className="container__content">
        <CreateTaskPannel />
        <TasksList />
      </div>
    </div>
  )
}

export default App
