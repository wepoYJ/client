/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-15 10:03:00
 * @LastEditTime: 2021-03-18 17:24:25
 * @Description:  
 * @FilePath: /client/src/pages/FirstPages/FirstPages.tsx
 */
import LoginBox from '../../component/loginBox/LoginBox'
import LeftNavigation from '../../component/navigation/leftNavigation/LeftNavigation'
import './FirstPages.css'
import '../../publishCss.css'
import TopNavigation from '../../component/navigation/topNavigation/TopNavigation'
import React from 'react'
import Swipera from '../../component/Swipera'
export default function FistPages() {
    document.title = "WEPO 首页"
    return (
        <div className="outerSecondBox">
            <header >
                <title >wepo</title>
                <TopNavigation></TopNavigation>
            </header>
            <div className="maxBox" >
                <div className="leftNavigation">

                    <LeftNavigation></LeftNavigation>
                </div>

                <div className="bodyBox">
                    <div className="swipeo">
                        <Swipera></Swipera>
                    </div>

                </div>
                <div className="rightList">
                    <LoginBox></LoginBox>

                </div>

            </div>

        </div>
    )



}