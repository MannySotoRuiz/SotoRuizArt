import React from "react";

function GalleryCard(props) {
    return (
        <div className="galleryCard" style={{
            ...styles.card,
            ...styles[props.size]
        }}>
            <img style={{ borderRadius: '16px', width: "100%", height: "100%", objectFit: "cover"}} src={props.imgURL} alt="art project"/>
        </div>
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