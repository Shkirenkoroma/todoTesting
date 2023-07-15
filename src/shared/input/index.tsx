import { FC, InputHTMLAttributes } from 'react';
import './style.less';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string
};

const Input: FC<IInputProps> = ({
  onChange,
  onKeyDown,
  value,
  className,
  placeholder,
  type,
}): JSX.Element => {

  return (
    <>
      <input
        className={className}
        type={type}
        onChange={onChange}
        onKeyPress={onKeyDown}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default Input;
