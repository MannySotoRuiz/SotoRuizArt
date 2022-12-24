import kateTitle from "../images/kateTitle.png";

const Years = () => {
    return (
        <div id="years">
            <div className="header">
                <div className="kateTitle">
                    <img src={kateTitle} alt="Doodles fonts" />
                </div>
            </div>
            <div id="yearsContent"></div>
            {/* <img src={ notebookPage } alt="notebook page" />
            <div id="yearsContainer">
                <div id="holdNameTitle">
                    <div className="kateTitle">
                        <img src={kateTitle} alt="Doodles fonts" />
                    </div>
                </div>
                <div id="yearsLeftPanel">

                </div>
            </div> */}
        </div>
    );
}

export default Years;