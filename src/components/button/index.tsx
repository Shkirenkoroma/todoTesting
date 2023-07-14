import { FC } from 'react';
import './style.less';

export interface IPropsButton {
  className: string
  buttonName: string
  handleFunction: () => void
}

const Button: FC<IPropsButton> = ({
  className,
  buttonName,
  handleFunction,
}): JSX.Element => {
  return (
    <button className={className} onClick={handleFunction}>
      <span className="button__name">{buttonName}</span>
    </button>
  );
};

export default Button;
