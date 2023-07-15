import { FC, useState } from 'react';
import TasksList from 'components/elements/tasks';
import Input from './components/input';
import './App.less';

const App: FC = (): JSX.Element => {
  const [tasks, setTasks] = useState<string>('');

  return (
    <div className="container">
      <h1 className="container__title">Todo List</h1>
      <div className="container__content">
        <Input
          setTasks={setTasks}
          tasks={tasks}
        />
        <TasksList />
      </div>
    </div>
  );
};

export default App;
