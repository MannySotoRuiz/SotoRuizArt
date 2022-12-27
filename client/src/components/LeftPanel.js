import { useNavigate } from "react-router-dom";

export default function LeftPanel({ list }) {
    const navigate = useNavigate();
    // console.log(list);
    return (
        <div className="leftPanel">
            {list.map((item, idx) => {
                return (
                    <div className={`${item.class}`} key={idx} onClick={() => {navigate(item.navigate)}}>
                        <img style={item.style} src={item.imageURL} alt={item.alt}/>
                    </div>
                )
            })}
        </div>
    );
}