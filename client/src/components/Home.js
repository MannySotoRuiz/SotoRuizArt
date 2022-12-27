import HomePage from "../images/HomePage.png";
import Kate from "../images/Kate.png";
import Emily from "../images/Emily.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    const handleClick = (event) => {
        const name = event.currentTarget.parentNode.children[0].alt;
        navigate(`/${name}/gallery`);
    }

    return (
        <div id="home">
            <img src={HomePage} alt="Home page img" />
            <div id="selectKate"><img src={Kate} alt="kate" onClick={handleClick}/></div>
            <div id="selectEmily"><img src={Emily} alt="emily" onClick={handleClick}/></div>
        </div>
    );
}

export default Home;