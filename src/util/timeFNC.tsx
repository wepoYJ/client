/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 16:51:23
 * @LastEditTime: 2021-03-23 18:08:22
 * @Description:  
 * @FilePath: /client/src/util/timeFNC.tsx
 */
function toString_padStart(text: number): string {
    return text.toString().padStart(2, '0')
}
export function formatDate(timestamp: wepoPublic.timeStamp): string {
    let time: Date = new Date(timestamp)
    const month: string = toString_padStart(time.getMonth() + 1)
    const date: string = toString_padStart(time.getDate())
    const hours: string = toString_padStart(time.getHours())
    const minute: string = toString_padStart(time.getMinutes())
    return `${month}月 ${date} 日 ${hours}:${minute}`
}
