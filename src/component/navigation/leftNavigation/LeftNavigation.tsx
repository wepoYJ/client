/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-15 10:03:00
 * @LastEditTime: 2021-03-23 14:26:06
 * @Description:  
 * @FilePath: /client/src/component/navigation/leftNavigation/LeftNavigation.tsx
 */

import './LeftNavigation.css'
import '../../../publishCss.css'
import React,{ useState, createContext } from 'react'

const LeftSelectContext = createContext({ setSeleteds: (num: number) => { } })
const leftNavigationText = [
    '热门',
    '头条',
    '视频',
    '榜单',
    '电影',
    '时尚',
    '体育',
    '动漫'
]


function RenderButton(name: string, num: number, seleted: number,setSeleted:any) {
   
  
    return (
        <button key={num}  className={seleted === num ? "normalFontHavW buttonsSelete" : "buttons XFont"} onClick={() => {
            setSeleted(num)
        }} >
            {name}
        </button>
    )
}

export default function LeftNavigation() {
    const [seleted, setSeleted] = useState(0)


    return (
        <LeftSelectContext.Provider value={{
            setSeleteds: setSeleted
        }} >

            <div className="Box-outside" id="nav">

                {
                    leftNavigationText.map((value: string, index: number) => RenderButton(value, index, seleted,setSeleted))
                }

            </div>
        </LeftSelectContext.Provider >

    )
}

