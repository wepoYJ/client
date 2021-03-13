
import './LeftNavigation.css'
import '../../../publishCss.css'
import { useState, createContext, useContext } from 'react'

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
        <a key={num} className={seleted == num ? "buttons normalFontHav" : "buttons XFont"} onClick={() => {
            setSeleted(num)
        }} >
            {name}
        </a>
    )
}

export default function LeftNavigation(props: any) {
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

