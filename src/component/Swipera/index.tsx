/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-18 14:57:36
 * @LastEditTime: 2021-03-19 13:33:07
 * @Description:  横向轮播
 * @FilePath: /client/src/component/Swipera/index.tsx
 */
import './weiper.css'
import React, { useEffect } from 'react'
import Swiper from 'swiper';
interface image{
    imags: string,
    title: string,
}
interface imags {
    imags: string,
    title: string,
    littleImag:Array<image>,
}

const imgs: Array<imags> = [
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

]

export default function Swipera(props: any) {
    useEffect(() => {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
        })
    }, [props])
    return (
        <div className="swiper-container" >
            <div className="swiper-wrapper">
                {
                    imgs.map((value, index: number) => {
                        console.log(index)
                        return (
                            <div key={value.imags} className="swiper-slide">
                                {/* <div className="eachBox">
                                    {console.log('giao')} */}
                                <img className="fristImage" src={value.imags} alt={value.title}></img>
                                {/* {console.log('11giao11')}

                                    <div className="clumBox">
                                    {console.log('22222')}
                                        {
                                            value.littleImag.map((imageUrls, indexs) => {
                                                console.log('33giao33')
                                                return <img key={imageUrls.imags} className="secondImage" src={imageUrls.imags} alt={imageUrls.title} />
                                            })
                                        }
                                    </div>
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
            <div className="swiper-pagination">1</div>
            <div className="swiper-button-prev">2</div>
            <div className="swiper-button-next">→</div>

        </div>
    )

}