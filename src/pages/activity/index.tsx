import { message, Pagination, Spin } from 'antd'
import * as React from 'react'
import { fetchActivityList } from '@api/activity'
import { IActivityItem } from '@api/activity/interface'
import ActivityItem from '@/components/activity-item'
import './index.less'

const pageSize = 10

const Activity: React.FC = () => {
  const [dataList, setDataList] = React.useState<IActivityItem[]>([])
  const [pageNum, setPageNum] = React.useState(1)
  const [totalCount, setTotalCount] = React.useState(1)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (window.localStorage.getItem('activity-page-num')) {
      setPageNum(Number(window.localStorage.getItem('activity-page-num')))
    }
  }, [])

  React.useEffect(() => {
    setLoading(true)
    fetchActivityList({
      size: pageSize,
      page: pageNum
    }).then((res) => {
      setLoading(false)
      if (res) {
        setTotalCount((res?.pageInfo.totalCount || 18) - 18)
        setDataList(res?.dataList || [])
        return
      }
      message.error('服务器开了点小差...')
    })
  }, [pageNum])

  const handleActivityPageChange = (page: number): void => {
    setPageNum(page)
    window.localStorage.setItem('activity-page-num', page.toString())
  }

  return (
    <div className="activity">
      <div className="activity-header">
        <div className="mask" />
        <span className="title">动态</span>
        <br />
        <span className="describe">一点一滴 记录我们前进的脚步</span>
        <br />
        <span className="describe">一心一意 走过我们成功的道路</span>
      </div>
      <Spin spinning={loading}>
        <div className="activity-body">
          {Boolean(dataList.length) &&
            dataList.map((item) => <ActivityItem key={item.id} activityInfo={item} />)}
        </div>
        <div className="activity-bottom">
          <Pagination
            current={pageNum}
            total={totalCount}
            hideOnSinglePage
            pageSize={6}
            showSizeChanger={false}
            onChange={handleActivityPageChange}
          />
        </div>
      </Spin>
    </div>
  )
}

export default Activity
