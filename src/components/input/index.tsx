import { FC, KeyboardEvent, ChangeEvent } from 'react';
import Button from 'components/button';
import { getNoties } from 'redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { noties } from 'redux/selectors';
import './style.less';

export interface IPropsInput {
  setNoties: (e: string) => void
  notiesData: string
  setActiveModal: (e: boolean) => void
  activeModal: boolean
  error: boolean
  setError: (e: boolean) => void
}

const Input: FC<IPropsInput> = ({
  setNoties,
  notiesData,
  setActiveModal,
  activeModal,
  error,
  setError,
}): JSX.Element => {
  const notiesArray = useSelector(noties);
  const dispatch = useDispatch();

  const notiesItem = {
    id: Math.random(),
    value: notiesData,
  };

  const handleNoties = (e: ChangeEvent<HTMLInputElement>): void => {
    setNoties(e.target.value);
    setError(false);
  };

  const saveNoties = () => {
    const isSameNote = notiesArray.some(
      (item: any) => item.value === notiesData,
    );
    if (!isSameNote && !!notiesData) {
      dispatch(getNoties(notiesItem));
      localStorage.setItem('noties', JSON.stringify(notiesArray));
    } else if (!!isSameNote) {
      setActiveModal(!activeModal);
    } else setError(!error);
  };

  const handleChange = (e: KeyboardEvent): void => {
    const isSameNote = notiesArray.some(
      (item: any) => item.value === notiesData,
    );
    if (e.key === 'Enter') {
      if (!isSameNote && !!notiesData) {
        dispatch(getNoties(notiesItem));
        localStorage.setItem('noties', JSON.stringify(notiesArray));
      } else if (!!isSameNote) {
        setActiveModal(!activeModal);
      } else setError(!error);
    }
  };

  return (
    <>
      <input
        className="input"
        type="text"
        onChange={handleNoties}
        onKeyPress={handleChange}
        placeholder="Введите текст"
      />
      <Button
        handleFunction={saveNoties}
        className="button"
        buttonName="Добавить"
      />
    </>
  );
};

export default Input;
