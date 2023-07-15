import { FC, ChangeEvent, KeyboardEvent } from 'react'
import './style.less'

interface IMainInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyChange: (e: KeyboardEvent) => void
  value: string
  classProperties: string
  placeholderText: string
  typeInput: string
}

const MainInput: FC<IMainInputProps> = ({
  onChange,
  onKeyChange,
  value,
  classProperties,
  placeholderText,
  typeInput,
}): JSX.Element => {
  
  return (
    <>
      <input
        className={classProperties}
        type={typeInput}
        onChange={onChange}
        onKeyPress={onKeyChange}
        placeholder={placeholderText}
        value={value}
      />
    </>
  )
}

export default MainInput
