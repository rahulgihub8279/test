import React from "react";
// import propTypes from "prop-types";

export default function About(probs) {
  return (
    <>
      <div
        className="container my-4"
        style={{ color: probs.mode === "light" ? "black" : "white" }}
      >
        <h5 className="mx-4 mb-2">About us</h5>
        <div
          className="accordion"
          id="accordionExample"
          style={{ color: probs.mode === "light" ? "black" : "white" }}
        >
          <div className="accordion-item mx-4">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b>{probs.item}</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show "  
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: probs.mode === "dark" ? "#1d2a35" : "white",
              }}
            >
              <div className="accordion-body">
                <p
                  style={{
                    color: probs.mode === "light" ? "black" : "white",
                  }}
                >
                  Free software utility which allows you to find the most
                  frequent phrases and frequencies of words. Non-English
                  language texts are supported. It also counts number of words,
                  characters, sentences and syllables. Also calculates lexical
                  density.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
