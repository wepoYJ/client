/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 16:51:23
 * @LastEditTime: 2021-03-23 16:56:15
 * @Description:  
 * @FilePath: /client/src/util/timeFNC.tsx
 */
export function formatDate(time: wepoPublic.timeStamp) {
    var date=new Date(time)
    return `${date.getMonth()+1}月 ${date.getDate()} 日 ${date.getHours()}:${date.getMinutes()}`
}