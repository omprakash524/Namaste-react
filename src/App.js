import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


// const heading4 = React.createElement("h1", {id:"heading", xyz:"head"}, "Hello i am from react and react dom and first react program");
// // console.log(heading4); // return object
// const root4 = ReactDOM.createRoot(document.getElementById("root"));
// root4.render(heading4);

// const heading5 = React.createElement(
//     "h2",
//     {id:"heading5", className:"abc"},
//     "Hello world from react heading 5 and from om"
// );
// // const root5 = ReactDOM.createRoot(document.getElementById("root"));
// root4.render(heading5);

// // const heading =  React.createElement("h1", {},"hello i am om");
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);



// /**
//  * 
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1>I'm h1 tag </h1>
//  *      </div>
//  * </div>
//  * 
//  */

// const parent = React.createElement(
//     "div", 
//     {id:"parent"},
//     React.createElement(
//         "div", 
//         {id: "child"}, 
//         React.createElement(
//             "h1", 
//             {}, 
//             "I'm h1 tag"))
// );

// root4.render(parent);

// /**
//  * <div className="grandparentc">
//  *      <div id="parentid">
//  *             <div id="childid">
//  *                  <h1>I am h1 tag inside the class </h1>
//  *                  <h2>I am sibling so need to include in array </h2>
//  *              </div>
//  *              <div id="childid2">
//  *                  <h1>I am h1 tag inside the class </h1>
//  *                  <h2>I am sibling so need to include in array </h2>
//  *              </div>
//  *      </div>
//  * </div>
//  * ReactElement(Object) => HTML(Browser Understands)
//  */

// const parent2 = React.createElement("div", {className: "grandparentc"},
//     React.createElement("div",{id: "parentid"},[
//         React.createElement("div", {id: "childid"},[
//             React.createElement("h1", {}, "I am tag inside the class"),
//             // if we wish to add sibling
//             React.createElement("h2",{id:"h2sibling"}, "I am sibling using array"),
//         ]),
        
//         React.createElement("div", {id: "childid2"}, [
//             React.createElement("h2", {}, "I am h2 tag inside childid2"),
//             React.createElement("h1", {}, "I am h1 tag inside childid2 "),
//         ]),
//     ])
// );

// root4.render(parent2);


/*
// React.createElement => ReactElement-JS Object => HTMLElement(render)
//  Using core react
const heading = React.createElement("h1", {id:"heading"}, "Namaste react 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

// using jsx to create h1 tag
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (<h1 id="heading" className="heading">Namaste React  using JSX🚀</h1>);
console.log(jsxHeading);
root.render(jsxHeading);

const jsxHeading1 = (
    <h1 className="head">Namaste React </h1>
);


const Title = () =>(
    <h1 className="head" tabIndex="5">
        Namaste React using jsx
    </h1>
);
const elem = <span>React element</span>

const title1 = (
    <h1 className="head" tabIndex="5">
        {elem}
        {Title()}
        Namaste React using react element
    </h1>
);
const number = 10000;
// Using React with JSX
//  React Functional Component
const HeadingComponent = () =>{
    return <h1 className="heading">Namaste react functional component</h1>
}

const HeadingComponent2 = () =>(
    <div id="container">
        <Title/>
        {number}
        <h2>{title1}</h2>
        <h1>{89+645}</h1>
        <h1 className="heading">Namaste react functional component</h1>
    </div>
);
root.render(<HeadingComponent2/>);

// Using React without JSX
const HeadingComponent3 = () =>{
    return React.createElement("h1",{className: "heading"}, "Namaste react functional component");
}

*/



// =========================================================================



// Building food ordering application
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of res
 *          - Star rating
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });




// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
