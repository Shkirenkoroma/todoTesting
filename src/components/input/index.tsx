import { FC, KeyboardEvent, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNoties } from 'redux/reducers'
import { noties } from 'redux/selectors'
import Button from 'components/button'
import './style.less'

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
  const notiesArray = useSelector(noties)
  const dispatch = useDispatch()

  const notiesItem = {
    id: Math.random(),
    value: notiesData,
  }

  const handleNoties = (e: ChangeEvent<HTMLInputElement>): void => {
    setNoties(e.target.value)
    setError(false)
  }

  const saveNoties = () => {
    const isSameNote = notiesArray.some(
      (item: any) => item.value === notiesData,
    )
    if (!isSameNote && !!notiesData) {
      dispatch(getNoties(notiesItem))
    } else if (!!isSameNote) {
      setActiveModal(!activeModal)
    } else setError(!error)
  }

  const handleChange = (e: KeyboardEvent): void => {
    const isSameNote = notiesArray.some(
      (item: any) => item.value === notiesData,
    )
    if (e.key === 'Enter') {
      if (!isSameNote && !!notiesData) {
        dispatch(getNoties(notiesItem))
      } else if (!!isSameNote) {
        setActiveModal(!activeModal)
      } else setError(!error)
    }
  }

  return (
    <>
      <input
        className="input"
        type="text"
        onChange={handleNoties}
        onKeyPress={handleChange}
        placeholder="Добавьте задачу в свой личный план"
      />
      <Button
        handleClick={saveNoties}
        className="button"
        buttonName="Добавить"
      />
    </>
  )
}

export default Input
