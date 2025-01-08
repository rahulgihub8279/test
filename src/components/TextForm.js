import React, { useState } from "react";
import PropTypes from "prop-types";

function TextForm(probs) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handlelwClick = () => {
    setText(text.toLowerCase());
  };
  const clearText = () => {
    setText("");
    probs.show("text cleared","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: probs.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3 mx-4">
          <h2 className="text-center ">{probs.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            onChange={handleOnChange}
            rows="8"
            placeholder="enter text here...."
            style={{
              backgroundColor: probs.mode === "light" ? "white" : "#1d2a35",
              color: probs.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary mt-3" onClick={handleUpClick}>
            Convert Uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-4" onClick={handlelwClick}>
            Convert Lowercase
          </button>
          <button
            className="btn btn-danger mx-4 mt-3 px-3 btn-md"
            onClick={clearText}
          >
            Clear
          </button>
          <button
            className="btn btn-success ml-10 px-3 mt-3 btn-md"
            onClick={speak}
          >
            Speak/stop
          </button>
        </div>
      </div>
      <div
        className="container my-4 "
        style={{ color: probs.mode === "light" ? "black" : "white" }}
      >
        <h3 className="mx-4">Your text summary</h3>
        <p className="mx-4">
          <b>{text.split(" ").length - 1}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <h3 className="mx-4">Preview</h3>
        <p className="mx-4">
          {text.length > 0 ? text : "enter your text to preview"}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultrops = {
  heading: "set name",
};

export default TextForm;
