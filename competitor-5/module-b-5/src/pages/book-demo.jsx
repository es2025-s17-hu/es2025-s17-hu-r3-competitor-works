import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

export default function BookDemo() {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <section className={'book'}>
                    <h1>Book a free <span>Demo</span></h1>
                    <div className={'columns'}>
                        <div className={'calender'}>
                            Book
                        </div>
                        <form action="">
                            <div className={'row'}>
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder={'Name'} id={'name'}/>
                            </div>
                            <div className={'row'}>
                                <label htmlFor="phone">Phone number</label>
                                <input type="text" placeholder={'Phone'} id={'phone'}/>
                            </div>
                            <div className={'row'}>
                                <label htmlFor="email">Email address</label>
                                <input type="text" placeholder={'Email'} id={'email'}/>
                            </div>
                            <div>
                                <button>Book Demo</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}