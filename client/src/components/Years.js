import { useNavigate, useParams, useLocation } from "react-router-dom";

const Years = () => {
    const  { id } = useParams();
    const location = useLocation();

    const navigate = useNavigate();

    const allYears = ["2023", "2022", "2021", "2020"];

    const allRows = Math.ceil(allYears.length / 3);

    let yearsGroup = [];
    let yearIndex = 0;
    for (let i = 0; i < allRows; i++) {
        let holdYears = [];
        for (let j = yearIndex; j < allYears.length; j++) {
            holdYears.push(allYears[j]);
            yearIndex++
            if (holdYears.length === 3) {
                yearsGroup.push(holdYears);
                break;
            }
            if (j === (allYears.length - 1)) {
                yearsGroup.push(holdYears);
            }
        }
    }

    const handleYearClick = (e) => {
        const getYear = e.currentTarget.innerText;
        navigate(`${location.pathname}/${getYear}/menu`);
    }

    return (
        <div className="notebookContainer">
            <div className="header">
                <div className="nameTitle">
                    <img src={require(`../images/${id}Title.png`)} alt="Doodles fonts" />
                </div>
            </div>
            <div className="content">
                <div className="leftPanel">
                    <div className="panelPostIt panelHomePostIt">
                        <img style={{width: "75%", height: "65%"}} src={require("../images/Home.png")} alt="Home" onClick={() => {navigate("/")}}/>
                    </div>
                    <div className="panelPostIt panelViewAllPostIt">
                        <img style={{width: "85%", height: "55%"}} src={require("../images/viewAll.png")} alt="View All" onClick={() => {navigate("/")}}/>
                    </div>
                </div>
                <div className="rightPanel">
                    <div className="subjectTitle">
                        <img className="yearsTitleImg" src={require("../images/Years.png")} alt="Years"/>
                    </div>
                    <div className="subjectContent">
                        {yearsGroup.map((row, idx) => {
                            return (
                                <div className="yearRow" key={idx}>
                                    {row.map((year, i) => {
                                        return (
                                            <div className="yearPostIt" key={i} onClick={handleYearClick}>{year}</div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Years;