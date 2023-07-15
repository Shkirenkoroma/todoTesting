import { FC } from 'react'
import './style.less'

export interface IEditInputProps {
  value: string
  onChange: (value: string) => void
}

const EditInput: FC<IEditInputProps> = ({ value, onChange }): JSX.Element => {
  
  return (
    <div className="editItem">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default EditInput
