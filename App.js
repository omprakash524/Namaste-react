import React from "react";
import ReactDOM from "react-dom";

const heading4 = React.createElement("h1", {id:"heading", xyz:"head"}, "Hello i am from react and react dom and first react program");
// console.log(heading4); // return object
const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(heading4);

const heading5 = React.createElement(
    "h2",
    {id:"heading5", className:"abc"},
    "Hello world from react heading 5 and from om"
);
// const root5 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(heading5);

// const heading =  React.createElement("h1", {},"hello i am om");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag </h1>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div", 
        {id: "child"}, 
        React.createElement(
            "h1", 
            {}, 
            "I'm h1 tag"))
);

root4.render(parent);

/**
 * <div className="grandparentc">
 *      <div id="parentid">
 *             <div id="childid">
 *                  <h1>I am h1 tag inside the class </h1>
 *                  <h2>I am sibling so need to include in array </h2>
 *              </div>
 *              <div id="childid2">
 *                  <h1>I am h1 tag inside the class </h1>
 *                  <h2>I am sibling so need to include in array </h2>
 *              </div>
 *      </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent2 = React.createElement("div", {className: "grandparentc"},
    React.createElement("div",{id: "parentid"},[
        React.createElement("div", {id: "childid"},[
            React.createElement("h1", {}, "I am tag inside the class"),
            // if we wish to add sibling
            React.createElement("h2",{id:"h2sibling"}, "I am sibling using array"),
        ]),
        
        React.createElement("div", {id: "childid2"}, [
            React.createElement("h2", {}, "I am h2 tag inside childid2"),
            React.createElement("h1", {}, "I am h1 tag inside childid2 "),
        ]),
    ])
);

root4.render(parent2);

