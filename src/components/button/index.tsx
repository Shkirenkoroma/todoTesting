import { FC } from 'react'
import './style.less'

export interface IPropsButton {
  className: string
  buttonName: string
  handleClick: () => void
}

const Button: FC<IPropsButton> = ({
  className,
  buttonName,
  handleClick,
}): JSX.Element => {
  
  return (
    <>
      <button className={className} onClick={handleClick}>
        <span className="button__name">{buttonName}</span>
      </button>
    </>
  )
}

export default Button
