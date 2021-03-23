/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 12:08:42
 * @LastEditTime: 2021-03-23 17:39:53
 * @Description:  
 * @FilePath: /client/src/component/post/LImgPost/index.tsx
 */

import './LimgPost.css'

// eslint-disable-next-line
import React, { useRef, useState } from "react";
import Publisher from '../Publisher';
export default function LImgPost(props: any) {

    return (
        <div className="LimgPostBox">
            <a href="/#" className="imgBox">
                <img src="assets/icon/search.png" alt="titleImg" className="img" />
            </a>
            <a href="/#" className="textBox">
                <div className="textcontent">
                    &nbsp;&nbsp;<span className="leftPostTitles">#title#</span>
                    {"conentText"}

                </div>
                <p><Publisher avatar="assets/example/bg-start.png" nickName="jiang" creatTime={1616492385} ></Publisher> </p>
                
            </a>


        </div>
    )

}