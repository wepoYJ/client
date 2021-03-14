// import { useModal } from 'react-use-modal'
// import { Modal } from 'antd'
import qs from "qs"
// import toas from '../toas'
import axios from 'axios'
interface reqReturn {
    code: number,
    msg: string,
    data: any
}


const host: string = 'http://8.136.4.252:3000/'
let token: string = ''

const req_Post_Normal = function (url: string, data: any): Promise<reqReturn> {
    url = host + url
    console.log(url)

    return new Promise((resolve, reject) => {
        axios.request({
            method: 'POST',
            data: qs.stringify(data),
            headers: {
                // token: token
            },
        })
            .then((res: any) => {
                console.log(res)
                if (res.code === 200) {
                    resolve(res.data)
                }
                else {
                    // toas.error(res.msg, 300)
                    reject({ code: res.code, msg: res.msg })
                }

            })
            .catch((e) => {
                // toas.error(e, 300)
                // console.log(e)
            })
    })


    // return new Promise((resolve, reject) => {
    //     fetch(host + url, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             token: token
    //         },
    //         body: data
    //     }).then((res: any) => {
    //         return res.text()
    //     }).then((res: reqReturn) => {
    //         resolve(res)
    //     }).catch((e: any) => {
    //         console.warn(e)
    //         reject(e)
    //     })
    // })


}

export {
    req_Post_Normal,
}