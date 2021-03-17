/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-15 10:03:00
 * @LastEditTime: 2021-03-17 16:15:21
 * @Description:  
 * @FilePath: /client/src/net/request.ts
 */
// import { useModal } from 'react-use-modal'
// import { Modal } from 'antd'
import qs from "qs"
// import toas from '../toas'
// import axios from 'axios'
interface reqReturn<T> {
    code: number,
    msg: string,
    data: T
}

const host: string = 'http://8.136.4.252:5000/'
let token: string = ''

// let axiosClient = axios.create({
//     baseURL: host,
//     headers: {
//         token: token,
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// })

const req_Post_Normal = async function <T>(url: string, data: any): Promise<string | null> {
    // let resp
    // try {
    //     resp = await axiosClient.post(url, qs.stringify(data), {})
    //     if (resp.status=== 200) {
    //         let { code, msg, data } = resp.data as reqReturn<T>

    //         if (code === 0) {
    //             // 成功
    //             return Promise.resolve(data)
    //         } else {
    //             // 失败
    //             if (msg) {
    //                 // 有错误提示
    //             }
    //             return Promise.resolve(null)
    //         }
    //     }
    // } catch (e) {
    //     console.error(e)
    // }
    // return Promise.resolve(null)
    return new Promise((resolve, reject) => {
        fetch(host + url, {
            headers: {
                token: token,
                'content-type': 'application/json'
            },
            body: qs.stringify(data),
            method: "POST",
            mode:'no-cors',
            cache: 'no-cache',
        })
            .then((res) => {
                return (res.text())
            })
            .then((res: any) => {
                return JSON.parse(res)
            })
            .then((res: reqReturn<T>) => {
                console.log(res.code, res.data, res.msg)
                if (res.code === 0) {
                    return resolve(res.msg)
                }
                reject(res.msg)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export {
    req_Post_Normal,
}