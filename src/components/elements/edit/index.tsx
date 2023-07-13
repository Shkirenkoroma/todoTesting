import { FC } from 'react';
import { IEditInputProps } from 'types';
import './style.less';

const EditInput: FC<IEditInputProps> = ({
  value,
  onChange,
}): JSX.Element => {
  const handleChange = (value: string): void => {
    onChange(value);
  };

  return (
    <>
      <div className="todoItem_li">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default EditInput;
