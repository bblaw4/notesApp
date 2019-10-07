import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="NotesApp" />
      <Notes />
      <Footer title="Made by Brown" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
