import LoginBox from '../../component/loginBox/LoginBox'
import LeftNavigation from '../../component/navigation/leftNavigation/LeftNavigation'
import './FirstPages.css'
import '../../publishCss.css'
export default function FistPages() {
    document.title = "WEPO 首页"
    return (
        <div className="outerSecondBox">
            <header >
                <title >wepo</title>
                <p className="XXXFont">welcome to wepo </p>
            </header>
            <div className="maxBox" >
                <div className="leftNavigation">

                    <LeftNavigation></LeftNavigation>
                </div>
                <LoginBox></LoginBox>
            </div>

        </div>
    )



}