/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-20 15:39:14
 * @LastEditTime: 2021-03-20 16:27:18
 * @Description:  
 * @FilePath: /client/src/component/Swipers/publicInterface.ts
 */
export interface eachImage {
    urls: string | Array<string>;
    title: string;
    id: number;
    little: Array<eachImage> | null
}
export type imagesInterface=Array<eachImage>
