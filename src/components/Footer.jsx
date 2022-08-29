import instalogo from '../images/instagram-Icon.png'
import facebooklogo from '../images/facebook-Icon.png'
import githublogo from '../images/gitHub-Icon.png'
function Footer(){
    return(
        <div className="footer">
        <button type='button'><img src={instalogo} className="logo"/></button>
        <button type='button'><img src={facebooklogo} className="logo" /></button>
        <button type='button'><img src={githublogo} className="logo" /></button>
        </div>
    )
}
export default Footer;