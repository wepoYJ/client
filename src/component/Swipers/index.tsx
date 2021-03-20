/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-20 11:28:35
 * @LastEditTime: 2021-03-20 16:11:18
 * @Description:  
 * @FilePath: /client/src/component/Swipers/index.tsx
 */
import React, { useRef, useState } from "react";
import Swiper, { SwipeRef } from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';
import {imagesInterface} from "./publicInterface";


let a: imagesInterface = [
    {
        urls: 'abc',
        title: "ecc",
        id: 1,
        little: null
    },
    {
        urls: ['abc', 'def'],
        id: 2,
        title: "ecc",
        little: null
    },
    {
        urls: 'abc',
        title: "ecc",
        id: 4,
        little: [{
            urls: 'abc',
            title: "ecc",
            id: 5,
            little: null
        }, {
            urls: 'abc',
            title: "ecc",
            id: 6,
            little: null
        }]
    }
]

export default function Swipers() {
    const swiperRef = useRef<SwipeRef>(null);
    const [index, setIndex] = useState<number>(0);
    const swiperData = ["blue", "red", "black", "yellow", "#CCFFFF"];

    const swipeTo = () => {
        const swiperInstance = swiperRef.current;
        const currPage: string = index * 1 + '';
        if (swiperInstance) {
            swiperInstance.swipeTo(parseInt(currPage, 10));
        }
    };

    // const prev = () => {
    //     const swiperInstance = swiperRef.current;
    //     if (swiperInstance) {
    //         swiperInstance.prev();
    //     }
    // };

    // const next = () => {
    //     const swiperInstance = swiperRef.current;
    //     if (swiperInstance) {
    //         swiperInstance.next();
    //     }
    // };

    const onChange = (currPage: number, prevPage: number) => {
        console.log(currPage, prevPage);
        if (currPage == 4) {
            setTimeout(async () => {
                await setIndex(0)
                swipeTo()
            }, 3000);
        }
    };

    return (
        <div style={{
            width: "100%",
            height: "100%",
        }}>

            <Swiper
                className="demo-swiper-container"
                autoPlay={3000}
                selectedIndex={0}
                showIndicators={false}
                showDots={false}
                touchable={true}
                indicator={null}
                dots={null}
                direction="horizontal"
                loop={false}
                ref={swiperRef}
                onChange={onChange}
            >
                {swiperData.map((item: string, key) => (
                    <div key={key} style={{ backgroundColor: item, width: "100%", height: "12em" }}>{key + 1}</div>
                ))}
            </Swiper>

        </div>
    );
}