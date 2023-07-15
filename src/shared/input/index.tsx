import { FC, InputHTMLAttributes } from 'react'
import './style.less'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  classProperties: string
  typeInput: string
}

const Input: FC<IInputProps> = ({
  onChange,
  onKeyDown,
  value,
  classProperties,
  placeholder,
  typeInput,
}): JSX.Element => {

  return (
    <>
      <input
        className={classProperties}
        type={typeInput}
        onChange={onChange}
        onKeyPress={onKeyDown}
        placeholder={placeholder}
        value={value}
      />
    </>
  )
}

export default Input
