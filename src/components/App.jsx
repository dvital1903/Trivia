import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var qn = 0;
  console.log(data[0].question.text);
  return (
    <div className="app">
      Trivia!- This is my change
      <Question name="David" />
    </div>
  );
}

export default App;
//In App.jsx, create a Question component.
//Render an instance of `<Question />` inside of `<App />`.
function Question(props) {
  return (
    <h1>
      {data[0].question.text} {props.name}
    </h1>
  );
}

//data[0].question.text

//<div class="question">
//const element =
// <h1>Question goes here</h1>
// </div>
//Add props to `<Question />` with the text "Question goes here".
//In `<App />`, add a variable to set the current question number to 0.

//Replace "Question goes here" with the `question.text` field found in data for the first question.
//HINT: Use the question number variable you just wrote.
