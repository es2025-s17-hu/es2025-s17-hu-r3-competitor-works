import Logo from "../assets/images/logo.png";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.png";
const Footer = () => {
    return (
        <footer>
            <div className="Footer-content">
                <div className="Footer-left Footer-partial">
                    <div className="Footer-logo">
                        <img src={Logo} alt="Logo of dineease"/>
                    </div>
                    <div className="Footer-links">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="Footer-links">
                        <a href="#">+36 30 123 4567</a>
                        <a href="mailto:support@dineease.com">support@dineease.com</a>
                    </div>
                    <p className={"Footer-copyright"}>2024 - All rights reserved</p>
                </div>
                <div className="Footer-right Footer-partial">
                    <a href="#">Follow Us</a>
                    <div className="Footer-social-icons">
                        <a href={"#"} className="Social-icon">
                            <img src={Facebook} alt="Facebook link image"/>
                        </a>
                        <a href={"#"} className="Social-icon">
                            <img src={Instagram} alt="Instagram link image"/>
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;