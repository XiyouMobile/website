import * as React from 'react'
import { getGraduateMemberInfo } from '@/api/member'
import Year from '../year/index'
import './index.less'

// 成员
const Graduate: React.FC = () => {
  const [state, setState] = React.useState(0)
  const [group, setGroup] = React.useState(2018)
  React.useEffect(() => {
    getGraduateMemberInfo({ size: 100, year: '2017' }).then((res) => {
      if (res) {
        // console.log(res.dataList)
      }
    })
  }, [])
  const yearling = [
    { id: 2018, index: 0, click: true },
    { id: 2017, index: 1, click: true },
    { id: 2016, index: 2, click: false },
    { id: 2015, index: 3, click: false },
    { id: 2014, index: 4, click: false },
    { id: 2013, index: 5, click: false },
    { id: 2012, index: 6, click: false },
    { id: 2011, index: 7, click: false },
    { id: 2010, index: 8, click: false },
    { id: 2009, index: 9, click: false }
  ]
  return (
    <div>
      <div className="year-list-side">
        {yearling.map((item) => (
          <p
            key={item.id}
            className="year"
            style={{
              color: state === item.index ? '#2e6acc' : 'black',
              fontWeight: state === item.index ? 'bold' : 'normal'
            }}
            onClick={() => {
              setState(item.index)
              setGroup(item.id)
            }}
          >
            <span>{item.id}</span>
          </p>
        ))}
      </div>
      <div className="graduate">
        <div className="graduateMessage">
          <Year clicked={group} />
        </div>
      </div>
    </div>
  )
}

export default Graduate
