import { message, Divider } from 'antd'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { fetchActivityDetail } from '@api/activity'
import { IActivityDetail } from '@api/activity/interface'
import './index.less'

const ActivityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = React.useState<IActivityDetail>()

  React.useEffect(() => {
    fetchActivityDetail(id).then((res) => {
      if (res) {
        setData(res)
        return
      }
      message.error('服务器开小差了...')
    })
  }, [])

  return (
    <div className="activity-detail">
      {/* <img
        className="background-img background-img-left animate roll"
        src="http://localhost:3000/src/assest/images/android.png"
        alt=""
      />
      <img
        className="background-img background-img-right animate glow"
        src="http://localhost:3000/src/assest/images/android-rev.png"
        alt=""
      /> */}
      <div className="activity_detail_wrap">
        <h1 className="activity_title">{data?.title}</h1>
        <span className="pub-time">{data?.pubTime?.slice(0, 10)}</span>
        <Divider />
        <div
          className="activity-content"
          dangerouslySetInnerHTML={{ __html: data?.content || '' }}
        />
      </div>
    </div>
  )
}

export default ActivityDetail
