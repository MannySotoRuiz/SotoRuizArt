import { useNavigate, useParams, useLocation } from "react-router-dom";

const Menu = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const splitPath = location.pathname.split("/");
    const getName = splitPath[1];

    const handleYearsPanelClick = () => {
        navigate(`/${getName}/years`);
    }

    const handleCategoryClick = (event) => {
        const getCategory = event.currentTarget.children[1].innerText;
        const category = getCategory.toLowerCase(); 
        navigate(`/${getName}/years/${id}/${category}`);
    }

    return (
        <div className="notebookContainer">
            <div className="header">
                <div className="nameTitle">
                    <img src={require(`../images/${getName}Title.png`)} alt="Name title"/>
                </div>
            </div>
            <div className="content">
                <div className="leftPanel">
                    <div className="panelHomePostIt">
                        <img style={{width: "75%", height: "65%"}} src={require("../images/Home.png")} alt="Home" onClick={() => {navigate("/")}}/>
                    </div>
                    <div className="panelYearsPostIt">
                        <img style={{width: "75%", height: "65%"}} src={require("../images/yearsPanel.png")} alt="Home" onClick={handleYearsPanelClick}/>
                    </div>
                    <div className="panelPostIt panelViewAllPostIt">
                        <img style={{width: "85%", height: "55%"}} src={require("../images/viewAll.png")} alt="View All" onClick={() => {navigate("/")}}/>
                    </div>
                </div>

                <div className="rightPanel">
                    <div style={{ paddingRight: "25%" }} className="subjectTitle">
                        <img src={require("../images/Category.png")} alt="Category"/>
                    </div>
                    <div className="subjectContent">
                        <div className="rowSample">
                            <div className="cardSample" onClick={handleCategoryClick}>
                                <div className="imgSample">
                                    <img src={require("../images/drawingsSample.jpg")} alt="Drawings"/>
                                </div>
                                <div className="cardText">Drawings</div>
                            </div>
                            <div className="cardSample" onClick={handleCategoryClick}>
                                <div className="imgSample">
                                    <img src={require("../images/paintingsSample.jpg")} alt="Paintings"/>
                                </div>
                                <div className="cardText">Paintings</div>
                            </div>
                        </div>
                        <div className="rowSample">
                            <div className="cardSample" onClick={handleCategoryClick}>
                                <div className="imgSample">
                                    <img src={require("../images/craftsSample.jpg")} alt="Crafts"/>
                                </div>
                                <div className="cardText">Crafts</div>
                            </div>
                            <div className="cardSample" onClick={handleCategoryClick}>
                                <div className="imgSample">
                                    <img src={require("../images/sculpturesSample.png")} alt="Sculptures"/>
                                </div>
                                <div className="cardText">Sculptures</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Menu;