import { FC } from 'react'
import './style.less'

export interface IEditInputProps {
  value: string
  onChange: (e: string) => void
}

const EditInput: FC<IEditInputProps> = ({ value, onChange }): JSX.Element => {
  const handleChange = (value: string): void => {
    onChange(value)
  }

  return (
      <div className="todoItem_li">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
  )
}

export default EditInput
