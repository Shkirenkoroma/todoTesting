import { FC } from 'react';
import { IPropsButton } from 'types';
import './style.less';

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
