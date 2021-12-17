import * as React from 'react'
import { Divider, Menu, message, Pagination, Spin } from 'antd'
import { IWikiItem } from '@api/wiki/interface'
import { fetchWikiGroup, fetchWikiList, IGroupType } from '@api/wiki'
import { WikiItem } from '@/components/wiki-item'
import './index.less'

const parseGroupName = (key: number) => {
  if (key === 6 || key === 3) {
    return null
  }
  return {
    0: '全部',
    1: 'Android',
    2: 'iOS',
    4: '前端',
    5: '后台'
  }[key]
}

const Wiki: React.FC = () => {
  const [dataList, setDataList] = React.useState<IWikiItem[]>([])
  const [pageNum, setPageNum] = React.useState(1)
  const [totalCount, setTotalCount] = React.useState(1)
  const [selectGroup, setSelectGroup] = React.useState(['all'])
  const [group, setGroup] = React.useState<IGroupType[] | null>(null)
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    fetchWikiGroup().then((res) => {
      setGroup(res || null)
      setLoading(false)
    })
    if (window.localStorage.getItem('wiki-group')) {
      setSelectGroup([window.localStorage.getItem('wiki-group') || 'all'])
      if (window.localStorage.getItem('wiki-page-num')) {
        setPageNum(Number(window.localStorage.getItem('wiki-page-num')))
      }
    }
  }, [])

  React.useEffect(() => {
    if (pageNum) {
      window.localStorage.setItem('wiki-page-num', String(pageNum))
    }
  }, [pageNum])

  React.useEffect(() => {
    setLoading(true)
    fetchWikiList({
      size: 12,
      pageNum,
      type: selectGroup[0] === 'all' ? undefined : selectGroup[0]
    }).then((res) => {
      setLoading(false)
      if (res) {
        setTotalCount((res?.pageInfo.totalCount || 18) - 18)
        setDataList(res?.dataList || [])
        return
      }
      message.error('服务器开了点小差...')
    })
  }, [selectGroup, pageNum])

  return (
    <div className="wiki">
      <div className="wiki-header">
        <div className="mask" />
        <span className="wiki-title">Wiki</span>
        <br />
        <span className="wiki-describe">看似不起波澜的日复一日</span>
        <br />
        <span className="wiki-describe">会在某一天让你看到坚持的意义</span>
      </div>
      <Spin spinning={loading}>
        <div className="wiki-body">
          <div className="wiki-select">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['all']}
              inlineCollapsed={false}
              selectedKeys={selectGroup}
              disabledOverflow
              onSelect={(item) => {
                setSelectGroup([item.key as string])
                setPageNum(1)
                window.localStorage.setItem('wiki-group', item.key)
              }}
            >
              <Menu.Item key="all">全部</Menu.Item>
              {group?.map(
                (item) =>
                  parseGroupName(item.id) && (
                    <Menu.Item key={item.id}>{parseGroupName(item.id)}</Menu.Item>
                  )
              )}
            </Menu>
          </div>
          <div className="list-wrapper">
            <Divider />
            {dataList.map((item) => (
              <WikiItem key={item.id} {...item} />
            ))}
          </div>
          <div className="wiki-bottom">
            <Pagination
              current={pageNum}
              total={totalCount}
              hideOnSinglePage
              pageSize={12}
              showSizeChanger={false}
              onChange={(e) => setPageNum(e)}
            />
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default Wiki
