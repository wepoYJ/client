// import { useModal } from 'react-use-modal'
// import { Modal } from 'antd'
interface reqReturn {
    code: number,
    msg: string,
    data: any
}
const host: string = 'http://8.136.4.252/'
let token: string = ''

// function showTips(code: number, msg: string): void {
//     const { showModal, closeModal } = useModal()

//     showModal(({ }) => {
//         <Modal
//             title={`err :${code}`}
//             visible={true}
//             onOk={closeModal}
//             onCancel={closeModal}
//         >
//             <p>{msg}</p>
//         </Modal>
//     })
// }


const req_Post_Normal = function (url: string, data: any): Promise<reqReturn> {

    return new Promise((resolve, reject) => {
        fetch(host + url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: token
            },
            body: data
        }).then((res: any) => {
            return res.text()
        }).then((res: reqReturn) => {
            resolve(res)
        }).catch((e: any) => {
            console.warn(e)
            reject(e)
        })
    })


}

export {
    req_Post_Normal,
}