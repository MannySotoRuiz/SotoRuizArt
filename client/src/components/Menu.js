import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import LeftPanel from "./LeftPanel";

const Menu = () => {
    const { id } = useParams();
    const getName = id;
    const navigate = useNavigate();

    const handleCategoryClick = (event) => {
        const getCategory = event.currentTarget.children[1].innerText;
        const category = getCategory.toLowerCase(); 
        navigate(`/${getName}/${category}`);
    }

    const leftPanelList = [
        {class: "galleryHomePostIt", imageURL: "../images/Home.png", alt: "Home", style: {width: "75%", height: "65%"}, navigate: "/"},
        {class: "galleryMenuPostIt", imageURL: "../images/menuTitle.png", alt: "Gallery", style: {width: "85%", height: "55%"}, navigate: `/${id}/menu`},
        {class: "galleryPostIt", imageURL: "../images/gallery.png", alt: "Gallery", style: {width: "85%", height: "70%"}, navigate: `/${id}/gallery`}
    ];

    return (
        <div className="notebookContainer">
            <Header name={getName}/>
            <div className="content">
                <LeftPanel list={ leftPanelList } />
                
                <div className="rightPanel">
                    <div style={{ paddingRight: "25%" }} className="subjectTitle">
                        <img className="menuTitleImg" src={require("../images/Category.png")} alt="Category"/>
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