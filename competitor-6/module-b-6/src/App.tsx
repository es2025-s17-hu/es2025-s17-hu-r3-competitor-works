import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import Overview from "./pages/Overview.tsx";
import "./App.css";
import Features from "./pages/Features.tsx";
import Booking from "./pages/Booking.tsx";

const App = () => {
    return (
        <div className={"App"}>
            {/*HEADER WITH NAV AND LOGO*/}
            <Header/>
            <main>
                {/*PAGE ROUTES*/}
                <Routes>
                    <Route path={"/"} element={<Overview />}></Route>
                    <Route path={"/features"} element={<Features />}></Route>
                    <Route path={"/about-us"}></Route>
                    <Route path={"/pricing"}></Route>
                    <Route path={"/book-demo"} element={<Booking />}></Route>
                </Routes>
            </main>
            {/*FOOTER WITH SOCIALS*/}
            <Footer />
        </div>
    );
};

export default App;