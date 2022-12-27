import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selected, setSelected }) {
    if (!selected) {
        return <></>
    }

    return (
        <div className="modalPopup" onClick={() => setSelected(null)}>
            <div className="innerModalDiv" onClick={e => e.stopPropagation()}>
                <motion.div className="modalImg" layoutId={`card-${selected._id}`}>
                    <img src={selected.artImage} alt={selected.title}></img>
                </motion.div>
                <motion.div className="modalTextDiv" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h3>{selected.title}</h3>
                    <p>{selected.description}</p>
                    <span className="tag tag-cloud-functions tag-lg">#{selected.artist}</span>
                    <span className="tag tag-machine-learning tag-lg">#{selected.year}</span>
                    <span className="tag tag-firebase tag-lg">#{selected.category}</span>
                </motion.div>
            </div>
        </div>
    );
}