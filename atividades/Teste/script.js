import {createRoot} from "https://esm.sh/react-dom/client";
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function CompTeste  (){
  return (
    <p> The most handsome teacher in Brazil ! <br />
    <a href="https://www.bing.com/images/search?q=professor+xavier&form=HDRSC3&first=1" > VEJA AQUI </a> </p>
  );
}

const App = () =>{
  return (
    <div>
      <h1> Spotted teacher UNICESUMAR </h1>
      <p><small> showing the best teachers in CESU ! </small></p>
          <CompTeste />
    </div>
  );
};
          
const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(<App />);