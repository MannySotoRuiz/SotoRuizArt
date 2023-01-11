// import React from "react";
// import Header from "./Header";
// import { getRootCssStyles} from './cssUtils.js';


// const TestFlip = () => {
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function randomChoice(array) {
//     return array[Math.floor(Math.random() * array.length)];
//   }

//   let spines = Object.values(document.getElementsByClassName("spine"));
//   let covers = Object.values(document.getElementsByClassName("cover"));
//   let tops = Object.values(document.getElementsByClassName("top"));

//   let availablePatterns = getRootCssStyles();

//   let availableColors = [
//     "maroon",
//     "darkgreen",
//     "darkolivegreen",
//     "brown",
//     "saddlebrown",
//     "sienna",
//     "midnightblue",
//   ];

//   // assign a random height, pattern and colour to each book
//   spines.map(function (s, i) {
//     let randomHeight = getRandomInt(270, 350);
//     s.style.height = `${randomHeight}px`;
//     s.style.top = `${280 - randomHeight}px`;

//     let randomPattern = randomChoice(availablePatterns);
//     s.style.backgroundImage = `var(${randomPattern})`;

//     let randomColor = randomChoice(availableColors);
//     s.style.backgroundColor = randomColor;

//     covers[i].style.height = `${randomHeight}px`;
//     covers[i].style.top = `${280 - randomHeight}px`;

//     tops[i].style.top = `${280 - randomHeight}px`;
//   });

//     return (
//         <div className="notebookContainer">
//           <Header name={"kate"}/>
//           <div style={{ justifyContent: "center", alignItems: "center", paddingLeft: "30%" }} className="content">
//             <div className="box">
//               <div class="box__face box__face--bottom">bottom</div>
//             </div>
//             <div className="bookshelf">
//               <div style={{ marginRight: "10%" }} className="book">
//                 <div className="side spine">
//                   <span className="spine-title"> Book Title </span>
//                   <span className="spine-author"> PG </span>
//                 </div>
//                 <div className="side top"></div>
//                 <div className="side cover"></div>
//               </div>
//               <div className="book">
//                 <div className="side spine">
//                   <span className="spine-title"> Book Title 2</span>
//                   <span className="spine-author"> PG </span>
//                 </div>
//                 <div className="side top"></div>
//                 <div className="side cover"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//     );
// }

// export default TestFlip;