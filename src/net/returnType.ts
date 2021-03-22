/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-20 17:10:59
 * @LastEditTime: 2021-03-22 09:31:40
 * @Description:  
 * @FilePath: /client/src/net/returnType.ts
 */
type userId = number
type url = string
type contentText = string
type nickName = string
export type personInfo_Dot = {
    nickName: nickName
    avatar: url
    userId: userId
    dynamic: string
    age: number
    sex: string
}
export type atReturn_Dot = Array<{
    userId: userId
    nickName: nickName
}>
export type comment_Dot = Array<{
    contentText: contentText
    sendPeople: personInfo_Dot
    replyPerson: personInfo_Dot | null
    creatTime: number
    commentId: number
    atUser: atReturn_Dot
}>

export type sendComment_DOT = {
    contentText: contentText
    tieZi_ID: number
    replyPersonId: userId | null
    atPerson: Array<userId>
}
export interface creatTieZi_Dot {
    contentText: contentText
    imageUrls: Array<url> | null
    atPerson: Array<userId> | null
}
export interface login_Dot { }