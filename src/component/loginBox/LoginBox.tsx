import React, { useState } from 'react'
import ShowTips from '../showTips/showTips'
// import './LoginBox.css'
// import { req_Post_Normal } from '../req/request'

// interface loginText {
//     US: string,
//     PS: string,
// }

// const clickLogin = (US: string, PS: string) => {
    // alert(`us:${US}   ,ps:${PS}`)
    // req_Post_Normal('/usr/login', {
    //     un: US,
    //     pwd: PS
    // })
    //     .then((res) => {
    //         res.data
    //     })
// }

const LoginBox: React.FC = function () {
    const [US, updateUS] = useState<string>('')
    const [PS, updatePS] = useState<string>('')
    // const { setTipsTexFN }=useContext(ShowTips)

    return (

        <form style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }}>
            用户名：
            <input type="text" value={US} onChange={(event) => updateUS(event.target.value)} ></input>
            密  码：
            <input type="text" value={PS} onChange={(event) => updatePS(event.target.value)}></input>
            <ShowTips.Consumer >
                {
                    ({setTipsTexFN}) => {
                        console.log(setTipsTexFN.toString())
                        return <button onClick={() => setTipsTexFN(US)} >登录</button>
                    }

                }


            </ShowTips.Consumer>
        </form>
    )
}
export default LoginBox