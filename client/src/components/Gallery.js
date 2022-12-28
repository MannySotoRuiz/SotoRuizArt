import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import GalleryCard from "./GalleryCard";
import Modal from "./Modal";

const Gallery = () => {
    const { id } = useParams(); // get the artist name picked from user

    const leftPanelList = [
        {class: "galleryHomePostIt", imageURL: "../images/Home.png", alt: "Home", style: {width: "75%", height: "65%"}, navigate: "/"},
        {class: "galleryMenuPostIt", imageURL: "../images/menuTitle.png", alt: "Gallery", style: {width: "85%", height: "55%"}, navigate: `/${id}/menu`},
        {class: "galleryPostIt", imageURL: "../images/gallery.png", alt: "Gallery", style: {width: "85%", height: "70%"}, navigate: `/${id}/gallery`}
    ];

    const [allImages, setImages] = useState([]);    // used to store all the art projects that need to be displayed
    const [fetchError, setError] = useState(null);  // used if error when fetching from backend
    const [imgSizes, setImgSizes] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const getAllArt = async () => {
            let name;
            if (id === "kate") {
                name = "Kate";
            } else {
                name = "Emily";
            }
            const getProjects = await fetchImages(name);
            let tempSizes = [];
            for (let i = 0; i < getProjects.length; i++) {
                const randomSize = Math.floor(Math.random() * 3);
                if (randomSize === 0) {
                    tempSizes.push("small");
                } else if (randomSize === 1) {
                    tempSizes.push("medium");
                } else if (randomSize === 2) {
                    tempSizes.push("large");
                }
            }
            setImgSizes(tempSizes);
            setImages(getProjects);
        };
        const fetchImages = async (artist) => {
            setError(null);
            const params = { param1: artist };
            const response = await fetch(`/api/arts?${new URLSearchParams(params)}`);
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
    
    return (
        <div className="notebookContainer">
            <Header name={id}/>
            <div className="content">
                <LeftPanel list={leftPanelList} />
                <div className="rightPanel">
                    <div className="subjectTitle">
                        <img className="artGalleryTitleImg" src={require("../images/artGalleryTitle.png")} alt="Art Gallery"/>
                    </div>
                    <div style={{ display: "flex", paddingLeft: "2%" }} className="subjectContent">
                        {fetchError && <h2>{fetchError}</h2>}
                        <div className="galleryBackground">
                            {allImages.map((art, idx) => {
                                return(
                                    <GalleryCard
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    key={idx} 
                                    size={imgSizes[idx]} 
                                    artProject={art} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Modal selected={selected} setSelected={setSelected} list={allImages}/>
            </div>
        </div>
    );

}

export default Gallery;