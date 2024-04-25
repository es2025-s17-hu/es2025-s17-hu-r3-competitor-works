import "../components_style/Booking.css";

const Booking = () => {
    return (
        <section className={"Booking--section"}>
            <h1 className={"Booking-section-title"}>Book a Free <span
                className={"Booking-section-title-highlighted"}>Demo</span></h1>
            <div className="Booking-elements-wrapper">
                <div className="Booking-selector">
                    <div className="Booking-selector-frame">
                        <div className="Booking-frame-subtitle">Date</div>
                        <div className="Booking-calender"></div>
                    </div>
                    <div className="Booking-selector-frame">
                        <div className="Booking-frame-subtitle">Time</div>
                        <form className="Booking-time-picker">
                            <label className="Booking-time">12:00
                                <input type="radio" name={"book-time"}/>
                            </label>
                            <label className="Booking-time">13:00
                                <input type="radio" name={"book-time"}/>
                            </label>
                            <label className="Booking-time">14:30
                                <input type="radio" name={"book-time"}/>
                            </label>
                            <label className="Booking-time">15:00
                                <input type="radio" name={"book-time"}/>
                            </label>
                        </form>
                    </div>

                </div>
                <div className="Booking-frame">
                    <form method={"post"}>
                        <div className="Form-input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id={"name"} placeholder={"John Doe"}/>
                        </div>
                        <div className="Form-input">
                            <label htmlFor="number">Phone number</label>
                            <input type="text" id={"name"} placeholder={"+36 123 4567"}/>
                        </div>
                        <div className="Form-input">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id={"email"}/>
                        </div>
                        <button className={"Submit-form"} type="submit" value={"Book Demo"}>Book Demo</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Booking;