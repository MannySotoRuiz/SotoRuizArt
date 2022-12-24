import HomePage from "../images/HomePage.png";
import Kate from "../images/Kate.png";
import Emily from "../images/Emily.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    return (
        <div id="home">
            <img src={HomePage} alt="Home page img" />
            <div id="selectKate"><img src={Kate} alt="Kate" onClick={() => {navigate("/years")}}/></div>
            <div id="selectEmily"><img src={Emily} alt="Emily" onClick={() => {navigate("/years")}}/></div>
        </div>
    );
}

export default Home;