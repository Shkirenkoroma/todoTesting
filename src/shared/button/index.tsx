import { FC } from 'react';
import './style.less';

export interface IPropsButton {
  className: string
  title: string
  handleClick: () => void
};

const Button: FC<IPropsButton> = ({
  className,
  title,
  handleClick,
}): JSX.Element => {
  
  return (
    <>
      <button className={className} onClick={handleClick}>
        {title}
      </button>
    </>
  )
};

export default Button;
