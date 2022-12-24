import { useNavigate, useParams, useLocation } from "react-router-dom";

const Category = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const splitPath = location.pathname.split("/");
    const getName = splitPath[1];
    const getYear = splitPath[3];

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
                        <img style={{width: "75%", height: "65%"}} src={require("../images/yearsPanel.png")} alt="Years" onClick={() => {navigate(`/${getName}/years`)}}/>
                    </div>
                    <div className="panelDrawingsPostIt">
                        <img style={{width: "85%", height: "75%"}} src={require("../images/drawings.png")} alt="Drawings" onClick={() => {navigate(`/${getName}/years/${getYear}/drawings`)}}/>
                    </div>
                    <div className="panelPaintingsPostIt">
                        <img style={{width: "85%", height: "65%"}} src={require("../images/paintings.png")} alt="Paintings" onClick={() => {navigate(`/${getName}/years/${getYear}/paintings`)}}/>
                    </div>
                    <div className="panelCraftsPostIt">
                        <img style={{width: "75%", height: "65%"}} src={require("../images/crafts.png")} alt="Crafts" onClick={() => {navigate(`/${getName}/years/${getYear}/crafts`)}}/>
                    </div>
                    <div className="panelYearsPostIt">
                        <img style={{width: "87%", height: "77%"}} src={require("../images/sculptures.png")} alt="Sculptures" onClick={() => {navigate(`/${getName}/years/${getYear}/sculptures`)}}/>
                    </div>
                </div>

                <div className="rightPanel">
                    <div style={{ paddingRight: "25%" }} className="subjectTitle">
                        <img src={require(`../images/${id}Title.png`)} alt="Catgory Title" />
                    </div>
                    <div className="subjectContent">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;