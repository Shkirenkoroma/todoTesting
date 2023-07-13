import { FC, useState } from 'react';
import NotiesLayout from 'components/elements/noties';
import Input from './components/input';
import './App.less';

const App:FC = ():JSX.Element => {
  const [noties, setNoties] = useState<string>('');
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className="container">
      <h1 className="container__title">Note Book</h1>
      <div className="container__content">
        <Input
          setNoties={setNoties}
          notiesData={noties}
          setActiveModal={setActiveModal}
          activeModal={activeModal}
          error={error}
          setError={setError}
        />
        <NotiesLayout />
      </div>
    </div>
  );
};

export default App;
