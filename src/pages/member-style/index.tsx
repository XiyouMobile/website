import * as React from 'react'
import { TeamNameEnum } from '@/common/inteface'
import Group from '../group'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './index.less'

const Member: React.FC = () => {
  const [state, setState] = React.useState(0)
  const [group, setGroup] = React.useState<TeamNameEnum>(TeamNameEnum.Android)
  const [parent] = useAutoAnimate() as any
  const groupList: { id: TeamNameEnum; index: number }[] = [
    { id: TeamNameEnum.Android, index: 0 },
    { id: TeamNameEnum.iOS, index: 1 },
    { id: TeamNameEnum.Web, index: 2 },
    { id: TeamNameEnum.Server, index: 3 }
  ]
  return (
    <div className="groupBox">
      <div className="groupBoxIn">
        <div className="group-mess" ref={parent}>
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
          <Group teamName={group} />
        </div>
      </div>
    </div>
  )
}

export default Member
