import "../components_style/Testimony.css";
const Testimony = () => {
    return (
        <section className={"Testimony--section-wrapper"}>
            <section className="Testimony-section">
                <h2 className="Section-title">Trusted by Restaurants <br/> Worldwide</h2>
                <div className="Testimony-boxes">
                    <div className="Testimony-box" id={"TBox-1"}>
                        <p className="Testimony-content">
                            DineEase helped us reduce operational costs by 20% within the first six months.
                        </p>
                        <div className="Testimony-footer">
                            <div className="Testimony-author">Jane Cooper</div>
                            <div className="Testimony-author-origin">The Gourmet Bistro</div>
                        </div>
                    </div>
                    <div className="Testimony-box" id={"TBox-2"}>
                        <p className="Testimony-content">
                            DineEase revolutionized our operations, making it easy to manage multiple locations seamlessly. Their support team is incredibly responsive and truly understands the needs of the hospitality industry.
                        </p>
                        <div className="Testimony-footer">
                            <div className="Testimony-author">Floyd Miles</div>
                            <div className="Testimony-author-origin">OceanView Cafe</div>
                        </div>
                    </div>
                    <div className="Testimony-box" id={"TBox-3"}>
                        <p className="Testimony-content">
                            Our customer satisfaction has never been higher, thanks to the personalized service we can provide with DineEase.
                        </p>
                        <div className="Testimony-footer">
                            <div className="Testimony-author">Kristin Watson</div>
                            <div className="Testimony-author-origin">City Diner</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Testimony;