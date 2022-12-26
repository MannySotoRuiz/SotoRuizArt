import { useParams } from "react-router-dom";

const Drawings = () => {
    const  { id } = useParams();

    console.log(id);
    return (
        <h1>Drawings</h1>
    );
}

export default Drawings;