import React from 'react';
import  ReactDOM from 'react-dom/client';

{
  /* <div id="parent">
    <div id="child">
        <h1 id="heading1">I am h1 tag</h1>
        <h2 id="heading2">I am h2 tag</h2>
    </div>
    <div id="child">
        <h1 id="heading1">I am h1 tag</h1>
        <h2 id="heading2">I am h2 tag</h2>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I am hello tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "I am hello tag"),
    React.createElement("h2", { id: "heading2" }, "I am random person"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react"
);

//jsx => React.createElement => ReactElement(JS object) => HTMLElement(render)
//above thing is done by babel ie converting jsx to React Element rest of the  thing is done by react
const jsxHeading = <h1 id='jsx'>"Hello jsx"</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)
// root.render(parent);


console.log(heading);
