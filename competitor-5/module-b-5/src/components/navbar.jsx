import logo from '../assets/logo.svg'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <header className={'navbar'}>
            <div className={'brand'}>
                <Link to={'/'}><img src={logo} alt="Logo"/></Link>
                <nav>
                    <ul>
                        <li><Link to={'/'} className={'active'}>Overview</Link></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </nav>
            </div>
            <Link to={'/book-demo'} className={'button-primary'}>Book a demo</Link>
        </header>
    )
}