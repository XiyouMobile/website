// 判断一个图片是否为默认头像
export const isDefaultImage = (img: string): boolean => {
  const reg = /default_img.png/
  return reg.test(img)
}
