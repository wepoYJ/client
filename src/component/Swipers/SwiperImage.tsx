/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-20 15:36:56
 * @LastEditTime: 2021-03-22 11:11:49
 * @Description:  
 * @FilePath: /client/src/component/Swipers/SwiperImage.tsx
 */
import React from "react";
import { eachImage } from "./publicInterface";
import "./renderImages.css"

export default function SwiperImage(props: { images: eachImage }): JSX.Element {
    let renderImage = props.images
    if (renderImage.urls instanceof Array) {
        return (
            <a href="/#" onClick={()=>alert(renderImage.id)} className="bigDiv">
                {renderImage.urls.map((value, index) => {
                    return <img key={value} src={value} alt={value} className="halfImage" />
                })}
                <p className="title" >{renderImage.title}</p>
            </a>
        )
    } else {
        let haveChild = !!renderImage.little
        return (
            <div className="bigDiv">
                <a href="/#" onClick={()=>alert(renderImage.id)} className="left">
                    <img src={renderImage.urls} alt={renderImage.urls} className={haveChild ? "leftC" : "oneImage"} width="100%" />
                    <p className={haveChild ? "leftTitle" : "title"} >{renderImage.title}</p>
                </a>
                { haveChild && <p className="right" >
                    {
                        !!renderImage.little && renderImage.little.map((value, index) => {
                            return (value.urls instanceof Array) ? null
                                : <a href="/#" onClick={()=>alert(value.id)} className="rightC">
                                    <img key={value.urls} src={value.urls} alt={value.urls} className="rightImg" />
                                    <p className={index===1?"rightTitle":"rightTitleT"} >{value.title}</p>
                                </a>
                        })
                    }
                </p>}
            </div>
        )
    }

}