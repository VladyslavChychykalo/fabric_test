import { useState } from "react";
import { Textfit } from "react-textfit";
import Fabric from "./Fabric";
import logo from "./logo.svg";
import "./App.css";
import styles from "./Test.module.css";

function App() {
  const [resized, setResized] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* <div style={{ width: "100%", height: "400px" }}> */}
        <Fabric />
        {/* </div> */}

        {/* <Textfit
          mode="single"
          className={styles.test}
          forceSingleModeWidth={false}
          onMouseMove={() => setResized((state) => !state)}
          style={{
            border: "1px solid",
            // paddingTop: "20px",
            // paddingBottom: "20px",
            width: "100%",
            maxWidth: "400px",
            minHeight: "50px",
            height: "50px",
            resize: "both",
            overflow: "auto",
          }}
        >
          Fat headline!
        </Textfit> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
