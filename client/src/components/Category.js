import { useNavigate, useParams, useLocation } from "react-router-dom";

const Category = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const splitPath = location.pathname.split("/");
    const getName = splitPath[1];
    const getYear = splitPath[3];
    console.log(id);

    const getImage = ["sample1", "sample2", "sample3", "sample4"];
    const allRows = Math.ceil(getImage.length / 3);
    let imgsGroup = [];
    let imgIndex = 0;
    for (let i = 0; i < allRows; i++) {
        let holdImages = [];
        for (let j = imgIndex; j < getImage.length; j++) {
            holdImages.push(getImage[j]);
            imgIndex++;
            if (holdImages.length === 3) {
                imgsGroup.push(holdImages);
                break;
            }
            if (j === (getImage.length - 1)) {
                imgsGroup.push(holdImages);
            }
        }
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
                        <img className={`${id}TitleImg`} src={require(`../images/${id}Title.png`)} alt="Catgory Title" />
                    </div>
                    <div style={{ paddingTop: "0%", paddingLeft: "4%" }} className="subjectContent">
                        {imgsGroup.map((row, idx) => {
                            return (
                                <div className="categoryRow" key={idx}>
                                    {row.map((img, i) => {
                                        if (id === "sculptures") {
                                            return (
                                                <div className="categoryCard" key={i}>
                                                    <div className="categoryCardImg">
                                                        <img src={require(`../images/${id}Sample.png`)} alt="categoryCardImg"/>
                                                    </div>
                                                    <div className="categoryCardText"><p>Drawing Sample</p></div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="categoryCard" key={i}>
                                                    <div className="categoryCardImg">
                                                        <img src={require(`../images/${id}Sample.jpg`)} alt="categoryCardImg"/>
                                                    </div>
                                                    <div className="categoryCardText"><p>Drawing Sample</p></div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;