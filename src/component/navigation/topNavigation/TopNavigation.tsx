
import './TopNavigation.css'
import '../../../publishCss.css'
export default function TopNavigation(props: any) {

    return (

        <div className="topNavigation">
            <p className="XXXFont" style={{
                color: 'black',
                fontFamily:'KaiTi'
            }}> wepo </p>
            <div className="findBigBox">

            <input type="text" className="findBox" />
            </div>
        </div>
    )

}