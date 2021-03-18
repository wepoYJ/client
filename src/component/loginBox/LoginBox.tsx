/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-15 10:03:00
 * @LastEditTime: 2021-03-18 17:35:47
 * @Description:  
 * @FilePath: /client/src/component/loginBox/LoginBox.tsx
 */
import React, { useState } from 'react'
import "./LoginBox.css"
import { req_Post_Normal } from '../../net/request'
// import './LoginBox.css'



const clickLogin = async (US: string, PS: string) => {
    console.log(US, PS)
    const result = await req_Post_Normal('usr/login', {
        email: US,
        password: PS
    })
    console.log(result)
}

const clickReg = async (US: string, PS: string): Promise<void> => {
    const result = await req_Post_Normal('usr/reg', {
        email: US,
        password: PS
    })
    console.log(result)
    alert('reg success')
}
const sendCode = async (email: string): Promise<void> => {
    const result = await req_Post_Normal('usr/sendVerify', {
        email: email,
    })
    console.log(result)
}
// eslint-disable-next-line
const LoginBox: React.FC = function () {
    const [US, updateUS] = useState<string>('')
    const [PS, updatePS] = useState<string>('')
    const [code, updateCode] = useState<string>('')
    // const { setTipsTexFN }=useContext(ShowTips)
    const [isLogin, setIsLogin] = useState<boolean>(true)
    return (
        <div className="loginBox">
            <div className="reg_Login_Box">
                <a href="/#" onClick={() => setIsLogin(true)} className={!isLogin ? "login" : 'login1'}>登录</a>
                <a href="/#" onClick={() => setIsLogin(false)} className={isLogin ? "login" : 'login1'}>注册</a>
            </div>
            <form className="fontBox">
                <div className="fontRow">
                    <div className="iconBox">
                        <img src="assets/icon/userName.png" alt="Us" className="smallIcon" ></img>
                    </div>
                    <input type="text" className="fontInput" placeholder="wepo号" value={US} onChange={(event) => updateUS(event.target.value)} ></input>
                    {!isLogin && <a href="/#" onClick={() => { sendCode(US) }}>验证码</a>}
                </div>
                <div className="fontRow">
                    <div className="iconBox">
                        <img src="assets/icon/ps.png" alt="Ps" className="XLIcon" ></img>
                    </div>
                    <input type="password" className="fontInput" placeholder="登录密码" value={PS} onChange={(event) => updatePS(event.target.value)}></input>
                </div>
                {
                    !isLogin &&
                    <div className="fontRow">
                        <div className="iconBox">
                            <img src="assets/icon/ps.png" alt="Ps" className="XLIcon" ></img>
                        </div>
                        <input type="text" className="fontInput" placeholder="验证码" value={code} onChange={(event) => updateCode(event.target.value)}></input>
                    </div>
                }
                <a href="/#" className="sure" onClick={() => isLogin ? clickLogin(US, PS) : clickReg(US, PS)} >{isLogin ? "登录" : "注册"}</a>

            </form>
        </div>

    )
}
export default LoginBox