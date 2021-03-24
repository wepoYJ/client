/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 16:51:23
 * @LastEditTime: 2021-03-24 10:08:35
 * @Description:  
 * @FilePath: /client/src/util/timeFNC.tsx
 */

export function formatDate(timestamp: wepoPublic.timeStamp): string {
    let time: Date = new Date(timestamp)
    const month: number = time.getMonth() + 1
    const date: number = time.getDate()
    const hours: number = time.getHours()
    const minute: string = time.getMinutes().toString().padStart(2, '0')
    return `${month}月 ${date} 日 ${hours}:${minute}`
}
