/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-15 10:03:00
 * @LastEditTime: 2021-03-23 15:05:41
 * @Description:  
 * @FilePath: /client/src/component/navigation/topNavigation/TopNavigation.tsx
 */

import './TopNavigation.css'
import '../../../publishCss.css'
// eslint-disable-next-line
import React, { useRef, useState } from "react";
export default function TopNavigation(props: any) {

    return (

        <div className="topNavigation">
            <p className="XXXFont" style={{
            }}>w&nbsp;e&nbsp;p&nbsp;o</p>
            <div className="findBigBox">
                <input type="text" className="findBox" />
                <a href="/#" onClick={() => { }}>
                    <img src="assets/icon/search.png" alt="search" className="findIcon" />
                </a>
            </div>
            <div className="navigations">
            <a href="/#" className="topA_DIV">
                <img src="assets/icon/Home.png" alt="home" className="findIcon" />
                首页</a>
            <a href="/#" className="topA_DIV">
                <img src="assets/icon/findOut.png" alt="home" className="findIcon" />
                发现</a>
            </div>

        </div>
    )

}