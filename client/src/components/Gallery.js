import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const { id } = useParams(); // get the artist name picked from user

    const leftPanelList = [
        {class: "panelHomePostIt", imageURL: "../images/Home.png", alt: "Home", style: {width: "75%", height: "65%"}, navigate: "/"},
        {class: "panelViewAllPostIt", imageURL: "../images/viewAll.png", alt: "Gallery", style: {width: "85%", height: "55%"}, navigate: `/${id}/gallery`}
    ];

    const [allImages, setImages] = useState([]);    // used to store all the art projects that need to be displayed
    const [fetchError, setError] = useState(null);  // used if error when fetching from backend
    const [imgSizes, setImgSizes] = useState([]);
    // const [selected, setSelected] = useState(null);

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

    // const sty = {
    //     // pin_container: {
    //     //     margin: 0,
    //     //     padding: 0,
    //     //     width: "80%",
    //     //     display: "grid",
    //     //     gridTemplateColumns: "repeat(auto-fill, 250px)",
    //     //     gridAutoRows: "10px",
    //     //     // position: "absolute",
    //     //     // left: "50%",
    //     //     transform: "translateX(-50%)",
    //     //     justifyContent: "center",
    //     //     backgroundColor: "black",
    //     //     color: "white"
    //     // }
    //     pin_container: {
    //         margin: 0,
    //         padding: 0,
    //         width: "80%",
    //         height: "100%",
    //         display: "grid",
    //         gridTemplateColumns: "repeat(auto-fill, 250px)",
    //         gridAutoRows: "10px",
    //         // transform: "translateX(-50%)",
    //         justifyContent: "center",
    //         // backgroundColor: "black",
    //         color: "white"
    //     }
    // }
    
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
                                    <GalleryCard key={idx} size={imgSizes[idx]} imgURL={art.artImage}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Gallery;