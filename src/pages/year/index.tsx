import * as React from 'react'
import { getGraduateMemberInfo } from '@api/member'
import { GraduateMemberInfo } from '@api/member/interface'
import './index.less'

// 成员
// eslint-disable-next-line react/no-unused-prop-types
const Year: React.FC<{clicked:number, dataYear:number}> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = React.useState<GraduateMemberInfo[]>([])
  const { clicked } = props;
  React.useEffect(() => {
    getGraduateMemberInfo({ size: 100, year: `${clicked}` }).then((res) => {
      if (res) {
        setList(res.dataList);
      }
    })
  }, [props])
  return (
    <div className="graduateMess">
      {list.map((item) => {
          const { name, graduateImg, company } = item
          return (
            <div key={item.name} className="wrapperMess">
              <div className="wrapperPersonMess">
                <div className="imgBox"><img src={graduateImg as string} alt="" /></div>
                <div className="user-info">
                  <div className="name">{name}</div>
                  {company && <div className="compony">{company}</div>}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default React.memo(Year);
