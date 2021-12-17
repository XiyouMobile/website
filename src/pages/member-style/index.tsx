import * as React from 'react'
import './index.less'
import Group from '../group/index'

const Member: React.FC = () => {
  const [state, setState] = React.useState(0)
  const [group, setGroup] = React.useState('Android')
  const groupList = [
    { id: 'Android', index: 0 },
    { id: 'iOS', index: 1 },
    { id: 'Web', index: 2 },
    { id: 'Server', index: 3 }
  ]
  return (
    <div className="groupBox">
      <div className="groupBoxIn">
        <div className="group-mess">
          {groupList.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: state === item.index ? '#2e6acc' : '',
                borderRadius: state === item.index ? '25px' : '',
                color: state === item.index ? 'white' : 'black'
              }}
              className="group-per"
              onClick={() => {
                setState(item.index)
                setGroup(item.id)
              }}
            >
              {item.id}
            </div>
          ))}
        </div>
        <div className="group-member">
          <Group teamName={group} clicked={group} />
        </div>
      </div>
    </div>
  )
}

export default Member
