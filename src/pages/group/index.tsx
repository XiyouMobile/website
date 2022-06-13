import * as React from 'react'
import { Link } from 'react-router-dom'
import { getMemberInfo } from '@/api/member'
import { MemberInfo } from '@/api/member/interface'
import { TeamNameEnum } from '@/common/inteface'
import randomArr from '@/common/utils/random-array'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './index.less'

type GroupProps = {
  teamName: TeamNameEnum
}

// 成员
const Group: React.FC<GroupProps> = (props) => {
  const { teamName } = props
  const [list, setList] = React.useState<MemberInfo[]>([])
  const [parent] = useAutoAnimate(/* optional config */) as any
  React.useEffect(() => {
    getMemberInfo({ size: 100, team: teamName }).then((res) => {
      if (res) {
        setList(randomArr(res.dataList))
      }
    })
  }, [props])
  return (
    <div className="group-member" ref={parent}>
      {list.map((item) => {
        const { name, team, mienImg, username } = item
        return (
          <Link to={`/user-detail/${username}`}>
            <div key={name} className="member-message">
              <div className="pic">
                <img src={mienImg as string} alt="" />
              </div>
              <p className="name">{name}</p>
              <p className="team">{team}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default React.memo(Group)
