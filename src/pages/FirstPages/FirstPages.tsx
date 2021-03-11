import LoginBox from '../../component/loginBox/LoginBox'
import LeftNavigation from '../../component/navigation/leftNavigation/LeftNavigation'
import './FirstPages.css'

export default function FistPages() {

    return (
        <div>
            <header >
                <title>wepo</title>
                <p>welcome to wepo </p>
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