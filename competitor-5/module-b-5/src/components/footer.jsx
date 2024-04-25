import {Link} from "react-router-dom";
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import logo from '../assets/logo.svg';

export default function Footer() {
    return (
        <footer>
            <div className={'content'}>
                <img src={logo} alt={'Dineease Logo Footer'}/>
                <div className={'links'}>
                    <Link to={'/'}>Terms of Use</Link>
                    <Link to={'/'}>Privacy Policy</Link>
                </div>
                <div className={'contact'}>
                    <Link to={'/'}>+36 30 123 4567</Link>
                    <Link to={'/'}>support@dineease.com</Link>
                </div>
                <p>© 2024 - All rights reserved</p>
            </div>
            <div className={'socials'}>
                <p>Follow Us</p>
                <div className={'links'}>
                    <Link to={'/'}><img src={facebook} alt={'Facebook'}/></Link>
                    <Link to={'/'}><img src={instagram} alt={'Facebook'}/></Link>
                </div>
            </div>
        </footer>
    )
}