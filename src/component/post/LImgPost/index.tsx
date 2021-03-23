/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 12:08:42
 * @LastEditTime: 2021-03-23 16:31:07
 * @Description:  
 * @FilePath: /client/src/component/post/LImgPost/index.tsx
 */

import './LimgPost.css'

// eslint-disable-next-line
import React, { useRef, useState } from "react";
export default function LImgPost(props: any) {

    return (
        <div className="LimgPostBox">
            <a href="/#" className="imgBox">
                <img src="assets/icon/search.png" alt="titleImg" className="img" />
            </a>
            <a href="/#" className="textBox">
            &nbsp;&nbsp;<span className="leftPostTitles">#title#</span>
              
            </a>


        </div>
    )

}