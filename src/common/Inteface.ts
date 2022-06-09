export interface IPageInfo {
  everyPage: number
  totalCount: number
  currentpage: number
  beginIndex: number
  hasPrePage: boolean
  hasNextPage: boolean
  totalPage: number
}

export enum TeamNameEnum {
  iOS = 'iOS',
  Android = 'Android',
  Web = 'Web',
  Server = 'Server'
}
