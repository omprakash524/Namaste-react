# Namaste React 🚀
# diving deep into code
# diving deep into technical concepts


What is CDN in React?
React is integrated in the projects using package managers like npm or yarn. However, 
there are some cases where using Content Delivery Network (CDN) links can be a advantage, 
especially for quick prototypes, or when integrating React into existing projects.


inserting react in our projects
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

now we have super power of react inside it

To become a great software developer - be curious about every small thing
what is cdn , why are we using cdn , is there a different way to do it


We as a developer have to use this super power to build the large scale applications.

We are going to use this super power into our project, we are going to do that a better a good react developer is the one who knows how to use the super power (react cdn)


    // what is the most costly expensive operation in web browser?
    //  Layout and Reflow: when you modify the DOM, change CSS styles, or resize the window
    // DOM Manipulation: when inserting or removing elements
    // CSS Selectors:CSS Selectors: Using complex CSS selectors, such as those with multiple classes, IDs, and pseudo-classesUsing complex CSS selectors, such as those with multiple classes, IDs, and pseudo-classes
    // One word answer : When DOM nodes manipulate when you click the button and something shows and hide the DOM Tree getting changed putting some nodes in the DOM and removing inside the DOM is the most expensive operation in web browser

/*
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
*/ === Only this much is react to avoid messy code we use JSX
JSX makes life easy when we have to create tags

 * ReactElement(Object) => HTML(Browser Understands)

===========================================================
What ever we written in index.html it will start executing from top to bottom it will execute react then react DOM
 and at the end it will see App.js and it went to that file and root.render() and it will see what is root it is taking
 the div with id root and it will render the App.js inside that div and what ever written inside the div it will replace
 not append (<div id="root">Om is here </div>) om is here will be replaced.


 ======= Episode 2 - Igniting our App ==========
 
