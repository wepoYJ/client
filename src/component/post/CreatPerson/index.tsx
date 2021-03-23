/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 16:33:34
 * @LastEditTime: 2021-03-23 17:05:04
 * @Description:  
 * @FilePath: /client/src/component/post/CreatPerson/index.tsx
 */
import React from 'react'
import { formatDate } from '../../../util/timeFNC'
import './index.css'
export default function postCreatPerson(props: postType.Publisher): JSX.Element {
    let publishTime = formatDate(props.creatTime)
    return (
        <div className="Publisher" >
            <img src={props.avatar} alt="head" className="" />&nbsp;
            <a href="/#" >
                <span className="text">{props.nickName}</span></a>
            &nbsp; <span className="text">{publishTime}</span>

        </div>
    )
}