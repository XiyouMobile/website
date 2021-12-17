import { message } from 'antd'
import pickBy from 'lodash/pickBy'
import { request as req } from './request'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IRes<D = any> {
  status: number | string
  message: 'success' | 'fail'
  data: D
  reason?: string
  prompts?: string
  // eslint-disable-next-line camelcase
  status_code?: number
}

export interface IHttpFetchOptions {
  /**
   * 不删除空值参数
   */
  allowEmptyParams?: boolean
  /**
   * 错误提示
   */
  errorMsg?: string
  /**
   * 禁止错误提示
   */
  silent?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IHttpFetch = <D = any>(
  url: string,
  data?: any,
  options?: string | false | IHttpFetchOptions
) => Promise<D | null>

interface IHttp {
  get: IHttpFetch
  post: IHttpFetch
  put: IHttpFetch
  del: IHttpFetch
  request: typeof req
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NotEmptyOrNullOrUndefined = (value: any) => value !== null && value !== undefined

const restful = [
  {
    methods: 'get',
    formatParams(params: { [x: string]: unknown }) {
      return pickBy(params, NotEmptyOrNullOrUndefined)
    },
  },
  {
    methods: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    formatParams(params: { [x: string]: unknown }) {
      return pickBy(params, NotEmptyOrNullOrUndefined)
    },
  },
  {
    methods: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    formatParams(params: { [x: string]: unknown }) {
      return pickBy(params, NotEmptyOrNullOrUndefined)
    },
  },
  {
    methods: 'delete',
    alias: 'del',
    headers: {
      'Content-Type': 'application/json',
    },
    formatParams(params: { [x: string]: unknown }) {
      return pickBy(params, NotEmptyOrNullOrUndefined)
    },
  },
]

const http = {
  request: req,
}

restful.forEach((item) => {
  const method = item.methods as 'get' | 'post' | 'put' | 'delete'

  // @ts-ignore ...
  http[item.alias || method] = <D>(
    url: string,
    data?: { [x: string]: unknown },
    options: IHttpFetchOptions = {},
  ) => {
    const { errorMsg, silent } = options

    if (typeof item === 'object' && data) {
      // eslint-disable-next-line no-nested-ternary
      item.formatParams(data)
    }

    return req<IRes<D>>(url, method, data, { ...item.headers })
      .then((resp) => {
        if (
          resp &&
          (resp.message === 'success' ||
            resp.status === 0 ||
            resp.status === 'success' ||
            resp.status_code === 0)
        ) {
          const resData = resp.data
          return Promise.resolve(resp.data ? resData : true)
        }

        if (!silent) {
          message.error(
            errorMsg ||
              resp.reason ||
              resp.prompts ||
              resp.message ||
              '服务器开小差了，请您稍后再试',
          )
        }

        return Promise.resolve(false)
      })
      .catch((error) => {
        console.log(error, 'error')

        if (!silent) {
          message.error('服务器开小差了，请您稍后再试')
        }
      })
  }
})

export default http as IHttp

export const { post, get, put, del, request } = http as IHttp
