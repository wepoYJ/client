// import { useModal } from 'react-use-modal'
// import { Modal } from 'antd'
import qs from "qs"
// import toas from '../toas'
import axios from 'axios'
interface reqReturn<T> {
    code: number,
    msg: string,
    data: T
}

const host: string = 'http://8.136.4.252:3000/'
let token: string = ''

let axiosClient = axios.create({
    baseURL: host,
    headers: {
        
    }
})

const req_Post_Normal = async function <T> (url: string, data: any): Promise<T | null> {
    let resp
    try {
        resp = await axiosClient.post(url, qs.stringify(data), {})
        if (resp.status== 200) {
            let { code, msg, data } = resp.data as reqReturn<T>
            
            if (code == 0) {
                // 成功
                return Promise.resolve(data)
            } else {
                // 失败
                if (msg) {
                    // 有错误提示
                }
                return Promise.resolve(null)
            }
        }
    } catch (e) {
        console.error(e)
    }
    return Promise.resolve(null)
}

export {
    req_Post_Normal,
}