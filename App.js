import React from "react";
import ReactDOM from "react-dom/client";

//JSX
//jsx =>Babel transpiles it to React.createElement => ReactElement(JS object) => HTMLElement(render)
//above thing is done by babel ie converting jsx to React Element rest of the  thing is done by react
const jsxHeading = <h1 id="jsx">"Hello jsx"</h1>;

//React functional component
const Title = () => {
  return <h3 className="title">Welcome to Namaste react</h3>;
};

const HeadingComponent = () => {
  return (
    <>
      {Title()}
      <Title />
      <Title></Title>
      <h1>Namaste React functional component</h1>
      <div>hgjhiuh</div>
    </>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />);

// root.render(parent);
