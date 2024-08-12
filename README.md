# Namaste React 🚀
# diving deep into code
# diving deep into technical concepts


What is CDN in React?
React is integrated in the projects using package managers like npm or yarn. However, 
there are some cases where using Content Delivery Network (CDN) links can be a advantage, 
especially for quick prototypes, or when integrating React into existing projects.

# There were two way to get react in our project
# 1. By using cdn link and 
# 2. via npm


# At the end of the day react is a javascript package and it is hosted over npm also



# But CDN is not a prefer way to bring react and react DOM in project why because fetching from cdn is costly operation it will network call to unpkg.com and it will get react from there
# But if we have already React in node_modules it would it be easy, we dont have to another network call to React. We will have already in our node_modules


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
 
[Github](https://github.com/omprakash524/Namaste-react)

npm is package management it will manage all the package and sometimes we also called dependencies (but not node package manager)

git init
package.json is a crucial configuration file for npm

# The most important package in our project is bundlers
# We use Webpack to bundle our code into a single file that can be executed by the browser
# Webpack, Parcel, and Vite are popular JavaScript bundlers and build tools, each with its own strengths

# Bundlers basically bundles the app it packages the app properly so that it can shipped to production.

# Here is a list of popular JavaScript module bundlers mentioned across different sources:

Webpack: One of the most popular and highly configurable bundlers.
Parcel: Known for its zero-configuration approach and speed.
Rollup: Often used for libraries, focusing on ES modules.
Vite: Known for its fast development server and optimized build process.
Snowpack: An alternative to Webpack that uses a different approach to bundling.
Browserify: One of the earlier bundlers focused on making node modules work in the browser.
These bundlers help in optimizing and packaging your code for production.


# There are two types of dependencies or packages we can install
# 1. dev dependencies - it is generally required for development phase
# 2. normal dependencies - used in production also


# Development dependencies in a Node.js project are packages required only during the development phase but not needed in the production environment. Here are some common examples:

Webpack: A module bundler for JavaScript applications.
Babel: A JavaScript compiler that allows you to use next-generation JavaScript today.
ESLint: A tool for identifying and fixing problems in JavaScript code.
Jest: A testing framework for JavaScript.
Mocha: A feature-rich JavaScript test framework.
Chai: An assertion library for Node.js and browsers.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Prettier: An opinionated code formatter.
React Testing Library: For testing React components.
PostCSS: A tool for transforming CSS with JavaScript plugins.
These packages are typically listed under the devDependencies section in your package.json file 


![alt text](image.png)

In Node.js and npm, there are several types of dependencies you can install, typically classified into the following categories:

Production Dependencies: Required for the application to run in production. They are specified under the dependencies section in package.json.

Development Dependencies: Needed only during development, such as testing libraries or build tools. These are specified under the devDependencies section.

Peer Dependencies: Specify which versions of a dependency are compatible with your package, allowing you to avoid version conflicts.

Optional Dependencies: These are not mandatory for your package to work, and you can specify fallback logic if they are not installed.

Bundled Dependencies: Include dependencies within your package, ensuring that they are installed when your package is installed [1][3].

In summary, there are five main types of dependencies you can install in a Node.js project.


# we will install package bundlers that is parcel which will be dev dependencies
# npm install -D parcel
# if our app is skeletion then parcel give muscles, parcel is beast

# "parcel": "^2.12.0"
= we can see caret(^) before version but we can also written tilde(~)

# Caret (^)
# Definition: The caret allows you to update a package to any version that is compatible with the specified version, while ensuring that no breaking changes are introduced.
# Behavior: If you specify "^2.12.0":
It means you can update to any version from 2.12.0 up to, but not including, 3.0.0. This includes:
Patch versions (e.g., 2.12.1, 2.12.2, etc.)
Minor versions (e.g., 2.13.0, 2.14.0, etc.)
This is useful because it allows you to receive updates for bug fixes and new features that do not break existing functionality.
# Tilde (~)
# Definition: The tilde allows for more restricted updates. It limits updates to the patch version only.
# Behavior: If you specify "~2.12.0":
It means you can update to any version from 2.12.0 up to, but not including, 2.13.0. This includes:
Only patch versions (e.g., 2.12.1, 2.12.2, etc.)
This is useful when you want to ensure that no new features (which could potentially introduce breaking changes) are added, focusing solely on small fixes.
# Summary
Use ^ when you are okay with receiving minor updates and bug fixes.
Use ~ when you want to strictly limit updates to bug fixes only, avoiding any new features.
Using these symbols helps maintain compatibility and stability in your project while still allowing for necessary updates.

# ![alt text](image-2.png)




# package.json is configuration of npm it keep a track of what version of package installed in our system.
# package-lock.json keep a track of exact version that is being installed
# Example: In package.json there is "parcel": "^2.12.0" and suppose today 2.12.3 is released then package.json will stay like this to same(2.12.0) version but in package-lock.json kind of locks the version and keeps a record of it like exact version of that package or dependencies.

In package-lock.json file we also see integrity along with package version, that integrity hash the code and make sure what ever we are running in local machine should same run on production.


# node modules

# node_modules contain all the code that we fetched from npm
# it is a folder where all the dependencies are stored it's like database of that dependencies of our project need.
# it is not a good practice to push node_modules in git because it is a big folder.
# it fetches all the codes of all the dependencies of our project required all the packages.

Transitive dependencies
# Our project need parcel and parcel as a project has it own dependencies and those dependencies can have it own dependencies and this dependencies can have own dependencies this is known as transitive dependencies


# Our project has package.json which show a dependencies parcel now this parcel can itself be dependent on other dependencies, parcel need help of other dependencies also, so it download all other library.


# In our project how many package.json and package-lock.json do we have if we think 2 then we are wrong, because once we open node_modules and see every dependencies contain its own package.json and package-lock.json

# node_modules is collection of dependencies



# Now if we wish to put our code in production but because of node_modules made it big size so to avoid this we will create .gitignore file this is basically used to avoid uploading code on production [in .gitignore we write /node_modules]




# If we have package.json and package-lock.json we can recreate all our node_modules even if we delete node_modules. lets say i have deleted the node_modules now we no more have parcel but because of my package.json and package-lock.json i can have the same exact version of all dependencies, we can recreate our node_modules using npm install hit enter it will recreate all the plathora of what ever the dependencies we have in package.json and package-lock.json with whatever version it has. This is why it is not required to push node_modules in github

# Basically having of package.json and package-lock.json we can recreate the node_modules

# What ever we can regenerate dont put on git




# To build our app using parcel = npx parcel index.html (source file of project)
# To run our app using parcel = npx parcel index.html (source file of project)

![alt text](image-3.png)




# npx just like we have npm which will install the package we have npx to execute package we write npx package name [npx parcel index.html]




# There were two way to get react in our project
# 1. By using cdn link and 
# 2. via npm


# At the end of the day react is a javascript package and it is hosted over npm also



# But CDN is not a prefer way to bring react and react DOM in project why because fetching from cdn is costly operation it will network call to unpkg.com and it will get react from there
# But if we have already React in node_modules it would it be easy, we dont have to another network call to React. We will have already in our node_modules



# Now we will install React as a pckage in our code = npm install react [remember we are not installing here -D(dev dependency but normal dependency we are installing ) and we are installing so we are using npm if it would be for executing we will use npx] 

# Similarly we will also install react DOM = npm install react-dom

Now we no longer need CDN we can remove react cdn link and reactDOM cdn link from index.html. Now if we start our app (npx parcel index.html) we can see our app running but we can see React is not defined because earlier we are getting React from the CDN but now we will get it from node_modules because we have installed react and reactDOM we just need to import React from node_modules.

We will get the error Browser scripts cannot have imports or exports. because we are injecting  [<script src="./App.js"> </script>] so at the end it will think it is just a simple javascript but not react.