import * as React from 'react'
import { getMemberInfo } from '@/api/member'
import { MemberInfo } from '@/api/member/interface'
import './index.less'
import { TeamNameEnum } from '@/common/inteface'

type GroupProps = {
  teamName: TeamNameEnum
}

// 成员
const Group: React.FC<GroupProps> = (props) => {
  const [list, setList] = React.useState<MemberInfo[]>([])
  const { teamName } = props
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: teamName }).then((res) => {
      if (res) {
        setList(res.dataList)
      }
    })
  }, [props])
  return (
    <div className="group-member">
      {list.map((item) => {
        const { name, team, mienImg } = item
        return (
          <div key={name} className="member-message">
            <div className="pic">
              <img src={mienImg as string} alt="" />
            </div>
            <p className="name">{name}</p>
            <p className="team">{team}</p>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Group)
