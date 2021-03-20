/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-20 15:36:56
 * @LastEditTime: 2021-03-20 16:27:26
 * @Description:  
 * @FilePath: /client/src/component/Swipers/renderImages.tsx
 */
import React, { useDebugValue, useRef, useState } from "react";
import { eachImage } from "./publicInterface";
import "./renderImages.css"
interface props {
    images: eachImage
}
export default function SwiperImage(props: props): JSX.Element {
    let renderImage = props.images
    if (renderImage.urls instanceof Array) {
        return (
            <div className="bigDiv">
                {renderImage.urls.map((value, index) => {
                    return <img src={value} alt={value} className="halfImage" />
                })}
            </div>
        )
    } else {
        return (
            <div className="bigDiv">
                <img src={renderImage.urls} alt={renderImage.urls} className="halfImage" />
                {
                    !!renderImage.little && renderImage.little.map((value) => {
                        if (value.urls instanceof Array) { return }
                        return <div className="rightC" >
                            <img src={value.urls} alt={value.urls} className="halfImage" />
                            <img src={value.urls} alt={value.urls} className="halfImage"/>
                        </div>
                    })
                }
            </div>
        )
    }

}