import React from "react";
import { motion } from "framer-motion";

function GalleryCard(props) {


    const hanldeMouseOver = (event) => {
        const getAll = document.querySelectorAll(".galleryCard");
        for (let i = 0; i < getAll.length; i++) {
            if (getAll[i] !== event.currentTarget) {
                getAll[i].style.opacity = "60%";
            }
        }
    }

    const hanldeMouseOut = () => {
        const getAll = document.querySelectorAll(".galleryCard");
        for (let i = 0; i < getAll.length; i++) {
            getAll[i].style.opacity = "100%";
        }
    }

    return (
        <motion.div onMouseOut={hanldeMouseOut} onMouseOver={hanldeMouseOver} onClick={() => props.setSelected(props.artProject)} layoutId={`card-${props.artProject._id}`} className="galleryCard" style={{
            ...styles.card,
            ...styles[props.size]
        }}>
            <img style={{ borderRadius: '16px', width: "100%", height: "100%", objectFit: "cover"}} src={props.artProject.artImage} alt="art project"/>
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