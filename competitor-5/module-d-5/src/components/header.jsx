import logo from '../assets/logo.svg';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('token', null);
        navigate('/login');
    }

    return (
        <header>
            <div className={'brand'}>
                <img src={logo} alt="Dineease logo"/>
                <p>Admin</p>
            </div>
            <button className={'primary-button'} onClick={() => logout()}>Log out</button>
        </header>
    )
}