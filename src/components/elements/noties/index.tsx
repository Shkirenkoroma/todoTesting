import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { noties } from 'redux/selectors';
import { IPropsMapping } from 'types';
import Note from './note';
import './style.less';

const NotiesLayout: FC = (): JSX.Element => {
  const notiesArray = useSelector(noties);
  const [filteredArrays, setFilteredArrays] = useState<any | undefined>([]);

  useEffect(() => {
    setFilteredArrays(notiesArray);
  }, [notiesArray]);

  return (
    <div className="containerNoties">
      <div>
        {filteredArrays.map((item: IPropsMapping, index: number) => (
          <Note
            key={index}
            item={item.value}
            specificId={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NotiesLayout;
