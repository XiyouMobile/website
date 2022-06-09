import * as React from 'react'
import { getGraduateMemberInfo } from '@api/member'
import { GraduateMemberInfo } from '@api/member/interface'
import './index.less'
import { Link } from 'react-router-dom'
import randomArr from '@/common/utils/random-array'

// 毕业生成员
const Year: React.FC<{ clicked: number }> = (props) => {
  const { clicked } = props
  const [list, setList] = React.useState<GraduateMemberInfo[]>([])

  React.useEffect(() => {
    getGraduateMemberInfo({ size: 100, year: `${clicked}` }).then((res) => {
      if (res) {
        setList(randomArr(res.dataList || []))
      }
    })
  }, [clicked])

  return (
    <div className="graduateMess">
      {list.map((item) => {
        const { name, graduateImg, company, username } = item
        return (
          <div key={item.name} className="wrapperMess">
            <Link to={`/user-detail/${username}`}>
              <div className="wrapperPersonMess">
                <div className="imgBox">
                  <img src={graduateImg as string} alt="" />
                </div>
                <div className="user-info">
                  <div className="name">{name}</div>
                  {company && <div className="compony">{company}</div>}
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Year)
