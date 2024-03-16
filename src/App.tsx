import * as React from "react";
import "./App.css";
import HeaderDisplay from "./components/HeaderDisplay";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <HeaderDisplay
            name="Shubham"
            designation="Software Developer"
            emailId="shubham8969305655@gmail.com"
            linkedinURL="https://www.linkedin.com/in/shubham-kumar-6aa852171/"
            githubURL="https://github.com/ShubhamKumar3010"
          />
        </header>
        <FloatingButton />
      </div>
    </>
  );
}

export default App;
