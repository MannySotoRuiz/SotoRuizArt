import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUpdateLikeCount } from "../hooks/useUpdateLikeCount";
import { useGetOneProject } from "../hooks/useGetOneProject";

function GalleryCard(props) {

    const { updateLikeCount, error } = useUpdateLikeCount();
    const { getOneProject, error: oneProjectError } = useGetOneProject();
    const [artIndex, setIndex] = useState(null);

    const hanldeMouseOver = async (event) => {
        const getAll = document.querySelectorAll(".galleryCard");
        let idx;
        let ifFound = false;
        for (let i = 0; i < getAll.length; i++) {
            if (getAll[i] !== event.currentTarget) {
                getAll[i].style.opacity = "60%";
            } else {  // display heart icon
                ifFound = true;
                idx = i;
                setIndex(i);
                getAll[idx].children[1].classList.remove("hidden");
            }
        }
        if (ifFound) {
            await getOneProject(props.artProject._id);
            if (oneProjectError) {
                alert(oneProjectError);
                console.log(oneProjectError);
            }
            const getFetch = JSON.parse(localStorage.getItem(`fetchedProject`)); // get the current like count
            const currentFetchedCount = getFetch[0].likecount;
            getAll[idx].children[1].children[1].innerText = currentFetchedCount;
        }
    }

    const hanldeMouseOut = () => {
        const getAll = document.querySelectorAll(".galleryCard");
        for (let i = 0; i < getAll.length; i++) {
            getAll[i].style.opacity = "100%";
            getAll[i].children[1].classList.add("hidden");
        }
        setIndex(null);
    }

    async function handleHeartClick(e, project) {
        e.stopPropagation(); // this is to prevent the popup from opening
        const divHeart = e.currentTarget;

        let currentCount = JSON.parse(localStorage.getItem(`img-likecount-${props.artProject._id}`)); // get the current like count

        if (divHeart.classList.contains("likedIt")) { // for removing like
            let current = JSON.parse(localStorage.getItem(`img-likecount-${props.artProject._id}`));
            current--;
            await updateLikeCount(props.artProject._id, current);
            if (error) {
                alert(error);
            } else {
                divHeart.classList.remove("likedIt"); // change heart to gray color
                localStorage.setItem(`img-liked-${props.artProject._id}`, JSON.stringify(false));
                document.querySelectorAll(".galleryCard")[artIndex].children[1].children[1].innerText = current;
            }

        } else {  // for adding like
            let current = JSON.parse(localStorage.getItem(`img-likecount-${props.artProject._id}`));
            if (current) {
                current++;
                await updateLikeCount(props.artProject._id, current);
                if (error) {
                    alert(error);
                } else {
                    divHeart.classList.add("likedIt"); // change heart to red color
                    localStorage.setItem(`img-liked-${props.artProject._id}`, JSON.stringify(true));
                    props.artProject.likecount = current;
                    // props.allImages[artIndex].likecount = currentCount;
                    document.querySelectorAll(".galleryCard")[artIndex].children[1].children[1].innerText = current;
                }

            } else {
                currentCount++; // increase like count by 1
                await updateLikeCount(props.artProject._id, currentCount);
                if (error) {
                    alert(error);
                } else {
                    divHeart.classList.add("likedIt"); // change heart to red color
                    localStorage.setItem(`img-liked-${props.artProject._id}`, JSON.stringify(true));
                    props.artProject.likecount = currentCount;
                    // props.allImages[artIndex].likecount = currentCount;
                    document.querySelectorAll(".galleryCard")[artIndex].children[1].children[1].innerText = currentCount;
                }
            }
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
                } else {
                    document.querySelectorAll(".card-heart")[i].classList.remove("likedIt");
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
            <div className="heartInfo hidden">
                <div onClick={(e) => handleHeartClick(e, props.artProject)} className="card-heart"></div>
                <h4>{props.artProject.likecount}</h4>
            </div>
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