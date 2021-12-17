/* eslint-disable no-param-reassign */
// eslint-disable @typescript-eslint/no-explicit-any
import qs from 'qs'
import 'whatwg-fetch'

const { FormData } = window
const baseUrl = ''

export const request = <R>(
  url: string,
  method = 'GET',
  data: any = {},
  headers: any = {},
  base = '',
): Promise<R> => {
  let body = data
  method = method.toUpperCase()
  url = (base || baseUrl) + url

  headers = {
    'X-Requested-With': 'XMLHttpRequest',
    ...headers,
  }

  if (FormData && data instanceof FormData) {
    delete headers['Content-Type']
  }
  if (headers['Content-Type'] === 'application/json') {
    body = JSON.stringify(data)
  }
  if (method === 'GET') {
    url += qs.stringify(data, { addQueryPrefix: true })
    body = undefined
  }

  return Promise.resolve(
    fetch(url, {
      method,
      body,
      headers,
      credentials: 'same-origin',
    }),
  )
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response
      }

      const error = new Error(response.statusText)
      // @ts-ignore
      error.response = response
      throw error
    })
    .then((response) => response.json())
}
