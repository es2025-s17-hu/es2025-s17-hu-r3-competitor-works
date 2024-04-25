import {useContext, useEffect} from "react";
import {AuthContext} from "../authContext.jsx";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import Header from "../components/header.jsx";

export default function DashboardPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, []);

    const logout = () => {
        localStorage.setItem('token', null);
    }


    return (
        <>
            <Header></Header>
            <div className={'dashboard'}>
                <h1>Admin Dashboard</h1>
                <ul className={'menu-items'}>
                    <li><Link to={'/menu-categories'}>Menu Categories</Link></li>
                    <li><Link to={'/'}>Menu Items</Link></li>
                    <li><Link to={'/'}>Tables</Link></li>
                    <li><Link to={'/'}>Users</Link></li>
                    <li><Link to={'/'}>Statistics</Link></li>
                    <li><Link to={'/'}>Preferences</Link></li>
                </ul>
            </div>

        </>
    )
}