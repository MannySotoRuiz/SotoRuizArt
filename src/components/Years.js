import { useNavigate, useParams } from "react-router-dom";

const Years = () => {
    const  { id } = useParams();

    const navigate = useNavigate();

    return (
        <div id="notebookContainer">
            <div className="header">
                <div className="nameTitle">
                    <img src={require(`../images/${id}Title.png`)} alt="Doodles fonts" />
                </div>
            </div>
            <div className="content">
                <div className="leftPanel">
                    <div className="panelPostIt">
                        <img style={{width: "75%", height: "65%"}} src={require("../images/Home.png")} alt="Home" onClick={() => {navigate("/")}}/>
                    </div>
                </div>
                <div className="rightPanel">
                    <div className="subjectTitle">
                        <img src={require("../images/Years.png")} alt="Years"/>
                    </div>
                    <div className="rightPanelContent"></div>
                </div>
            </div>
        </div>
    );
}

export default Years;