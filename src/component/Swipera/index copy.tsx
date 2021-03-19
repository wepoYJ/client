/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-18 14:57:36
 * @LastEditTime: 2021-03-18 17:24:50
 * @Description:  横向轮播
 * @FilePath: /client/src/component/Swipera/index.tsx
 */
import './weiper.css'
import React, { useEffect } from 'react'

const imgs = [
    {
        imags: "assets/example/bg-start.png",
        title: 'hahaha',
        littleImag: [
            {
                imags: "assets/example/bg-end.png",
                title: 'hahaha',
            },
            {
                imags: "assets/example/bg-cel-video.jpg",
                title: 'hahaha',
            }
        ]
    },
    {
        imags: "assets/example/bg-cel-video.jpg",
        title: 'hahaha',
        littleImag: [
            {
                imags: "assets/example/bg-end.png",
                title: 'hahaha',
            },
            {
                imags: "assets/example/bg-start.png",
                title: 'hahaha',
            }
        ]
    }
]

export default function Swipera(props: any) {
    useEffect(() => {

    }, [props])
    return (
        <div className="scroller" >
            <div className="inner">
                {
                    imgs.map((value, index) => {
                        return <div key={value.imags} className="eachBox">
                            <img className="fristImage" src={value.imags} alt={value.title} />
                            <div className="clumBox">
                                {
                                    value.littleImag.map((imageUrls, indexs) => {
                                        return <img key={imageUrls.imags} className="secondImage" src={imageUrls.imags} alt={imageUrls.title} />
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )

}