import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Modal({ selected, setSelected, list }) {
    const [artIndex, setIndex] = useState(null);

    useEffect(() => {
        if (selected) {
            if (selected === list[0]) {
                document.querySelectorAll(".modalLeftClick")[0].classList.add("hidden");
            }
            if (selected === (list[list.length - 1])) {
                document.querySelectorAll(".modalRightClick")[0].classList.add("hidden");
            }
        }
        const findIndex = () => {
            for (let i = 0; i < list.length; i++) {
                if (selected === list[i]) {
                    setIndex(i);
                    break;
                }
            }
        }
        const setLikedImages = () => { // when the popup opens, check if user already liked the image
            if (selected) {
                const ifLiked = JSON.parse(localStorage.getItem(`img-liked-${selected._id}`));
                if (ifLiked) { // previously liked this image
                    document.querySelectorAll(".heart-like-button")[0].classList.add("liked");
                } else { // did not like this image previously
                    document.querySelectorAll(".heart-like-button")[0].classList.remove("liked");
                }
            }
        }
        findIndex();
        setLikedImages();
    }, [selected, list]);

    if (!selected) {
        return <></>
    }

    // function for when the user clicks on the heart
    // either performing liked or disliked
    function handleHeartLiked (e, id) {
        const strCount = document.querySelectorAll(".likeCount")[0].innerText; // get the liked number count
        let numberCount = Number(strCount);

        if (e.currentTarget.classList.contains("liked")) {  // was already liked so remove like
            numberCount--;
            document.querySelectorAll(".likeCount")[0].innerText = numberCount;
            e.currentTarget.classList.remove("liked");
            localStorage.setItem(`img-liked-${id}`, JSON.stringify(false));

        } else {  // was not liked previously so now like it
            numberCount++;
            document.querySelectorAll(".likeCount")[0].innerText = numberCount;
            e.currentTarget.classList.add("liked");
            localStorage.setItem(`img-liked-${id}`, JSON.stringify(true));
        }
    }

    const updateLikeCount = async () => {
        console.log("test");
    }

    const handleLeftClick = (e) => {
        e.stopPropagation();

        if (artIndex === (list.length - 1)) {
            document.querySelectorAll(".modalRightClick")[0].classList.remove("hidden");
        }

        setSelected(list[artIndex-1]);
    }
    const handleRightClick = (e) => {
        e.stopPropagation();
        if (artIndex === 0) {
            console.log(document.querySelectorAll(".modalLeftClick"))
            document.querySelectorAll(".modalLeftClick")[0].classList.remove("hidden");
        }

        setSelected(list[artIndex+1]);
    }

    return (
        <div className="modalPopup" onClick={() => setSelected(null)}>
            <div className="modalLeftClick">
                <img onClick={handleLeftClick} src={require("../images/leftClick.png")} alt="left" />
            </div>
            <div className="innerModalDiv" onClick={e => e.stopPropagation()}>
                <motion.div className="modalImg" layoutId={`card-${selected._id}`}>
                    <img src={selected.artImage} alt={selected.title}></img>
                </motion.div>
                <motion.div className="modalTextDiv" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="likeShare">
                        <div onClick={(e) => handleHeartLiked(e, selected._id)} className="heart-like-button"></div>
                        <h4 className="likeCount">{selected.likecount}</h4>
                    </div>
                    <h3>{selected.title}</h3>
                    <p>{selected.description}</p>
                    <span className="tag tag-cloud-functions tag-lg">#{selected.artist}</span>
                    <span className="tag tag-machine-learning tag-lg">#{selected.year}</span>
                    <span className="tag tag-firebase tag-lg">#{selected.category}</span>
                </motion.div>
            </div>
            <div className="modalRightClick">
                <img onClick={handleRightClick} src={require("../images/rightClick.png")} alt="right" />
            </div>
        </div>
    );
}