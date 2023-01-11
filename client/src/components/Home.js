// import HomePage from "../images/HomePage-removebg.png";
// // import Kate from "../images/Kate.png";
// // import Emily from "../images/Emily.png";
// import { useNavigate } from "react-router-dom";

// const Home = () => {

//     let navigate = useNavigate();

//     // const handleClick = (event) => {
//     //     const name = event.currentTarget.parentNode.children[0].innerText;
//     //     navigate(`/${name.toLowerCase()}/gallery`);
//     // }

//     return (
//         <div id="notebookContainer">

//             <div className="homeHeader">
//                 <div className="homePostIt">
//                     <img style={{width: "85%", height: "55%"}} src={require("../images/Home.png")} alt=""/>
//                 </div>
//                 <div className="homePostIt">
//                     <img style={{width: "85%", height: "55%"}} src={require("../images/Home.png")} alt=""/>
//                 </div>
//                 <div className="homePostIt">
//                     <img style={{width: "85%", height: "55%"}} src={require("../images/Home.png")} alt=""/>
//                 </div>
//             </div>
//             <div className="homeContent">

//             </div>

//             {/* <Header name={"kate"}/> */}
//             {/* <div className="homeContent">
//                 <img id="homeImg" src={HomePage} alt="Home page img" />
//             </div> */}
//             {/* <img id="homeImg" src={HomePage} alt="Home page img" /> */}
//             {/* <div id="selectKate"><h1 onClick={handleClick}>Kate</h1></div>
//             <div id="selectEmily"><h1 onClick={handleClick}>Emily</h1></div> */}
//         </div>
//     );
// }

// export default Home;

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