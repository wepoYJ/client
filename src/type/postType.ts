/*
 * @Author: yangQi
 * @LastEditors:  
 * @Date: 2021-03-23 16:34:53
 * @LastEditTime: 2021-03-23 16:45:30
 * @Description:  
 * @FilePath: /client/src/type/postType.ts
 */
declare namespace postType {
    
    interface Publisher {
        avatar: string
        nickName: string
        creatTime: number
    }
    interface lookNums {
        likeNum: number
        commentNum: number
        repostNum: number
    }

}