
import './LeftNavigation.css'
import '../../../publishCss.css'
import { useState, createContext, useContext } from 'react'

const LeftSelectContext = createContext({ seleted: 0, setSeleteds: (num: number) => { } })
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


function RenderButton(name: string, num: number, seleted: any) {
    const { setSeleteds } = useContext(LeftSelectContext)
    return (
        <button className="buttons" onClick={() => setSeleteds(num)} >
            <p className="XFont" style={seleted == num ? { fontSize: 22, fontWeight: 'bold' } : {}}>
                {name[0]}&nbsp;&nbsp;&nbsp;&nbsp;{name[1]}
            </p>
        </button>
    )
}

export default function LeftNavigation(props: any) {
    const [seleted, setSeleted] = useState(0)


    return (
        <LeftSelectContext.Provider value={{
            seleted, setSeleteds: setSeleted
        }} >

            <div className="Box-outside">
                {
                    leftNavigationText.map((value: string, index: number) => RenderButton(value, index, seleted))
                }

                {/* <button className="buttons"><p className="XFont" style={seleted == 1 ? { fontSize: 22, fontWeight: 'bold' } : {}}></p></button>
            <button className="buttons"><p className="XFont" style={seleted == 2 ? { fontSize: 22, fontWeight: 'bold' } : {}}></p></button>
            <button className="buttons"><p className="XFont" style={seleted == 3 ? { fontSize: 22, fontWeight: 'bold' } : {}}></p></button>
            <button className="buttons"><p className="XFont" style={seleted == 4 ? { fontSize: 22, fontWeight: 'bold' } : {}}></p></button>
            <button className="buttons"><p className="XFont" style={seleted == 5 ? { fontSize: 22, fontWeight: 'bold' } : {}}></p></button>
            <button className="buttons"><p className="XFont" style={seleted == 6 ? { fontSize: 22, fontWeight: 'bold' } : {}}></p></button>
            <button className="buttons"><p className="XFont" style={seleted == 7 ? { fontSize: 22, fontWeight: 'bold' } : {}}></p></button> */}
            </div>
        </LeftSelectContext.Provider >

    )
}

