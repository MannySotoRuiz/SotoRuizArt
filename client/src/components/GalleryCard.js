import React, { useEffect } from "react";
import { motion } from "framer-motion";

function GalleryCard(props) {

    const hanldeMouseOver = (event) => {
        const getAll = document.querySelectorAll(".galleryCard");
        for (let i = 0; i < getAll.length; i++) {
            if (getAll[i] !== event.currentTarget) {
                getAll[i].style.opacity = "60%";
            } else {  // display heart icon
                event.currentTarget.children[1].classList.remove("hidden");
            }
        }
    }

    const hanldeMouseOut = () => {
        const getAll = document.querySelectorAll(".galleryCard");
        for (let i = 0; i < getAll.length; i++) {
            getAll[i].style.opacity = "100%";
            getAll[i].children[1].classList.add("hidden");
        }
    }

    async function handleHeartClick(e, project) {
        e.stopPropagation(); // this is to prevent the popup from opening

        if (e.currentTarget.classList.contains("likedIt")) {
            e.currentTarget.classList.remove("likedIt");
        } else {
            e.currentTarget.classList.add("likedIt");
        }

    }

    useEffect(() => {
        const checkIfLiked = () => {
            for (let i = 0; i < props.all.length; i++) {
                const getData = JSON.parse(localStorage.getItem(`img-liked-${props.all[i]._id}`));
                // console.log(getData);
                if (getData) {
                    // console.log(document.querySelectorAll(".card-heart")[i]);
                    document.querySelectorAll(".card-heart")[i].classList.add("likedIt");
                }
            }
        }
        checkIfLiked();
    })

    return (
        <motion.div onMouseOut={hanldeMouseOut} onMouseOver={hanldeMouseOver} onClick={() => props.setSelected(props.artProject)} layoutId={`card-${props.artProject._id}`} className="galleryCard" style={{
            ...styles.card,
            ...styles[props.size]
        }}>
            <img style={{ borderRadius: '16px', width: "100%", height: "100%", objectFit: "cover"}} src={props.artProject.artImage} alt="art project"/>
            <div onClick={(e) => handleHeartClick(e, props.artProject)} className="card-heart hidden"></div>
        </motion.div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        cursor: "pointer"
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default GalleryCard;