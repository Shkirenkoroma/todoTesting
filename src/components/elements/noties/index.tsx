import { FC } from 'react'
import { useSelector } from 'react-redux'
import { noties } from 'redux/selectors'
import Note from './note'
import './style.less'

export interface IPropsMapping {
  id: number
  value: string
}

const NotiesLayout: FC = (): JSX.Element => {
  const notiesArray = useSelector(noties)

  return (
    <div className="containerNoties">
      {notiesArray.map((el: IPropsMapping) => (
        <Note key={el.id} item={el.value} specificId={el.id} />
      ))}
    </div>
  )
}

export default NotiesLayout
