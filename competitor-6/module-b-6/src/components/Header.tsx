import {FC, useEffect} from "react";
import Logo from "../assets/images/logo.png";
import {NavLink} from "react-router-dom";
import "../components_style/Header.css";

const Header: FC = () => {

    useEffect(() => {

        const onScroll = ( ) =>{

        };

        window.addEventListener("scroll", onScroll);

        return () =>{
          window.removeEventListener("scroll", onScroll);
        };

    }, []);

    return (
        <header>
            {/*LOGO SECTION*/}
            <div className="Logo">
                <img src={Logo} alt="Dineease logo"/>
            </div>
            {/*NAVIGATION SECTION*/}
            <nav>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? "Link-active" : ""}  to={"/"}>Overview</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "Link-active" : ""} to={"/features"}>Features</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "Link-active" : ""} to={"/about-us"}>About Us</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "Link-active" : ""} to={"/pricing"}>Pricing</NavLink></li>
                </ul>
            </nav>
            <span className={"Demo-link-wrapper"}>
                 <NavLink className={({isActive}) => isActive ? "Link-active Demo-link" : "Demo-link"} to={"/book-demo"}>Book a demo</NavLink>
            </span>

        </header>
    );
};

export default Header;