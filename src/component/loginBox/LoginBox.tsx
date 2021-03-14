import React, { useState } from 'react'
import "./LoginBox.css"
// import './LoginBox.css'
import { req_Post_Normal } from '../req/request'

// interface loginText {
//     US: string,
//     PS: string,
// }

const clickLogin = (US: string, PS: string) => {
    console.log(US,PS)
    req_Post_Normal('/usr/login', {
        email: US,
        password: PS
    })
        .then((res) => {
          console.log(res)
        })
        .catch((e)=>{
            console.log(e)
        })
        
}

// eslint-disable-next-line
const LoginBox: React.FC = function () {
    const [US, updateUS] = useState<string>('')
    const [PS, updatePS] = useState<string>('')
    // const { setTipsTexFN }=useContext(ShowTips)

    return (
        <div className="loginBox">

            <form className="fontBox">
                <div className="fontRow">
                    <div className="iconBox">
                        <img src="assets/icon/userName.png" alt="Us" className="smallIcon" ></img>
                    </div>
                    <input type="text" className="fontInput" placeholder="邮箱号" value={US} onChange={(event) => updateUS(event.target.value)} ></input>
                </div>
                <div className="fontRow">
                    <div className="iconBox">
                        <img src="assets/icon/ps.png" alt="Ps" className="XLIcon" ></img>
                    </div>
                    <input type="text" className="fontInput" placeholder="登录密码" value={PS} onChange={(event) => updatePS(event.target.value)}></input>
                </div>

                <a href="/#" onClick={() => clickLogin(US, PS)} >登录</a>

            </form>
        </div>

    )
}
export default LoginBox