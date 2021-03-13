import LoginBox from '../../component/loginBox/LoginBox'
import LeftNavigation from '../../component/navigation/leftNavigation/LeftNavigation'
import './FirstPages.css'
import '../../publishCss.css'
import TopNavigation from '../../component/navigation/topNavigation/TopNavigation'
export default function FistPages() {
    document.title = "WEPO 首页"
    return (
        <div className="outerSecondBox">
            <header >
                <title >wepo</title>
                <TopNavigation></TopNavigation>
            </header>
            <div className="maxBox" >
                <div className="leftNavigation">

                    <LeftNavigation></LeftNavigation>
                </div>

                <div className="bodyBox">


                </div>
                <div className="rightList">
                    <LoginBox></LoginBox>

                </div>

            </div>

        </div>
    )



}