
 import './LeftNavigation.css'
export default function  LeftNavigation(params:any) {
    
    return(
        <div className="Box-outside">
            <button className="buttons">热门</button>
            <button  className="buttons">头条</button>
            <button  className="buttons">视频</button>
            <button  className="buttons">榜单</button>
            <button  className="buttons">电影</button>
            <button  className="buttons">时尚</button>
            <button  className="buttons">体育</button>
            <button  className="buttons">动漫</button>
        </div>
    )
}

