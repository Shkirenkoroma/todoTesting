import { FC, ChangeEvent, KeyboardEvent } from 'react'
import './style.less'

interface IMainInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyChange: (e: KeyboardEvent) => void
  value: string
}

const MainInput: FC<IMainInputProps> = ({
  onChange,
  onKeyChange,
  value,
}): JSX.Element => {
  
  return (
    <>
      <input
        className="input"
        type="text"
        onChange={onChange}
        onKeyPress={onKeyChange}
        placeholder="Добавьте задачу в свой личный план"
        value={value}
      />
    </>
  )
}

export default MainInput
