import React, { useState } from 'react'
import ShowTips from '../showTips/showTips'
import "./LoginBox.css"
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
        <div className="loginBox">

            <form className="fontBox">
                <div>
                    <img src={require("../../image/icon/userName.png")} alt="" ></img>
                    <input type="text" placeholder="邮箱号" value={US} onChange={(event) => updateUS(event.target.value)} ></input>
                </div>
                <div>
                    <input type="text" placeholder="登录密码" value={PS} onChange={(event) => updatePS(event.target.value)}></input>
                </div>
                <ShowTips.Consumer >
                    {
                        ({ setTipsTexFN }) => {
                            return <button onClick={() => setTipsTexFN(US)} >登录</button>
                        }

                    }
                </ShowTips.Consumer>


            </form>
        </div>

    )
}
export default LoginBox