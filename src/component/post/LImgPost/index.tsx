/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 12:08:42
 * @LastEditTime: 2021-03-24 10:04:08
 * @Description:  
 * @FilePath: /client/src/component/post/LImgPost/index.tsx
 */

import './LimgPost.css'

// eslint-disable-next-line
import React, { useRef, useState } from "react";
import Publisher from '../Publisher';

/**
 * @description: 左图片贴子组件
 * @param {any} props
 * @return {*}
 */
export default function LImgPost(props: any):JSX.Element {

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
                {/* 时间戳需要精确到毫秒，长度13 */}
                <p><Publisher avatar="assets/example/bg-start.png" nickName="jiang" creatTime={1616551111000} ></Publisher> </p>
                
            </a>


        </div>
    )

}