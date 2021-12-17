/**
 *
 * @param arr 需要打乱顺序的函数
 * @returns arr 打乱后的数组(!不会改变原数组)
 */
export default function randomArr<T>(arr: T[] = []): T[] {
  const newArr = arr.slice()
  newArr.sort(() => 0.5 - Math.random())
  return newArr
}
