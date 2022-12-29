import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Header from "./Header";
import LeftPanel from "./LeftPanel";

const Category = () => {

    const { id } = useParams(); // get the category picked from user
    const location = useLocation();
    const splitPath = location.pathname.split("/"); // get the current path that user is on
    const getName = splitPath[1]; // get name from the path
    localStorage.setItem("name", JSON.stringify(splitPath[1])); // store name in localstorage
    const [allImages, setImages] = useState([]);    // used to store all the art projects that need to be displayed
    const [fetchError, setError] = useState(null);  // used if error when fetching from backend
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const getAllArt = async () => {
            const tempName = JSON.parse(localStorage.getItem("name"));
            let name;
            if (tempName === "kate") {
                name = "Kate";
            } else {
                name = "Emily";
            }
            const getProjects = await fetchImages(name, id);

            const allRows = Math.ceil(getProjects.length / 3);
            let imgsGroup = [];
            let idx = 0
            for (let i = 0; i < allRows; i++) {
                let holdImgs = [];
                for (let j = idx; j < getProjects.length; j++) {
                    holdImgs.push(getProjects[j]);
                    idx++;
                    if (holdImgs.length === 3) {
                        imgsGroup.push(holdImgs);
                        break;
                    }
                    if (j === (getProjects.length - 1)) {
                        imgsGroup.push(holdImgs);
                    }
                }
            }
            setImages(imgsGroup);
        };
        const fetchImages = async (artist, category) => {
            setError(null);
            const params = { artist: artist, category: category };
            const response = await fetch(`/api/arts/getartcategory?${new URLSearchParams(params)}`);
            const json = await response.json();
            if (response.ok) {
                console.log("successfully fetched art projects");
                if (json.length === 0) {
                    setError("No art projects exist");
                } 
                return json;
            } else {
                console.log("Error when fetching art projects");
                setError(json.error);
            }
        }
        getAllArt();
    }, [id]);

    const Card = ({ item }) => {
        return (
            <motion.div layoutId={`card-${item._id}`} className="categoryCard" onClick={() => setSelected(item)}>
                <div className="categoryCardImg">
                    <img src={item.artImage} alt={item.title}/>
                </div>
                <div className="categoryCardText"><p>{item.title}</p></div>
            </motion.div>
        );
    }

    const leftPanelList = [
        {class: "galleryHomePostIt", imageURL: "../images/Home.png", alt: "Home", style: {width: "75%", height: "65%"}, navigate: "/"},
        {class: "galleryMenuPostIt", imageURL: "../images/menuTitle.png", alt: "menu", style: {width: "75%", height: "60%"}, navigate: `/${getName}/menu`},
        {class: "panelDrawingsPostIt", imageURL: "../images/drawings.png", alt: "drawings", style: {width: "85%", height: "75%"}, navigate: `/${getName}/drawings`},
        {class: "panelPaintingsPostIt", imageURL: "../images/paintings.png", alt: "paintings", style: {width: "85%", height: "65%"}, navigate: `/${getName}/paintings`},
        {class: "panelCraftsPostIt", imageURL: "../images/crafts.png", alt: "crafts", style: {width: "75%", height: "65%"}, navigate: `/${getName}/crafts`},
        {class: "panelSculpturesPostIt", imageURL: "../images/sculptures.png", alt: "sculptures", style: {width: "87%", height: "77%"}, navigate: `/${getName}/sculptures`},
        {class: "galleryPostIt", imageURL: "../images/gallery.png", alt: "gallery", style: {width: "85%", height: "70%"}, navigate: `/${getName}/gallery`}
    ];

    return (
        <div className="notebookContainer">
            <Header name={getName}/>
            <div className="content">
                <LeftPanel list={ leftPanelList } />

                <div className="rightPanel">
                    <div style={{ paddingRight: "25%" }} className="subjectTitle">
                        <img className={`${id}TitleImg`} src={require(`../images/${id}Title.png`)} alt="Catgory Title" />
                    </div>
                    <div style={{ paddingTop: "0%", paddingLeft: "4%" }} className="subjectContent">
                        {fetchError && <div className="error">{fetchError}</div>}
                        {allImages.map((row, idx) => {
                            return (
                                <div className="categoryRow" key={idx}>
                                    {row.map((project) => {
                                        return (
                                            <Card key={project._id} item={project} />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Modal selected={selected} setSelected={setSelected} list={allImages} />
            </div>
        </div>
    );
}

export default Category;