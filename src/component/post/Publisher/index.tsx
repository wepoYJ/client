/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 16:33:34
 * @LastEditTime: 2021-03-23 17:36:06
 * @Description:  
 * @FilePath: /client/src/component/post/Publisher/index.tsx
 */
import React from 'react'
import { formatDate } from '../../../util/timeFNC'
import './index.css'
export default function Publisher(props: postType.Publisher): JSX.Element {
    
    let publishTime = formatDate(props.creatTime)
    return (
        <div className="Publisher" >
            <img src={props.avatar} alt="head" className="img" />&nbsp;
            <a href="/#" className="abox" >
                <span className="text">{props.nickName}</span></a>
            &nbsp; <span className="text">{publishTime}</span>

        </div>
    )
}