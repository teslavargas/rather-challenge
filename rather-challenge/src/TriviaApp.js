import React from "react";
import { Link } from "react-router-dom";
import trivia from "./data/data";
import "./index.css";

export const TriviaApp = () => {

  return (
    <div className="container">
      <div className="trivia">
        <h1>{trivia.title}</h1>
        <img src={trivia.image} />
      </div>
      <div className="button">
        <Link to="/trivia">
        <button className="btn btn-primary">
          Comenzar
        </button>
        </Link>
      </div>
    </div>
  );
};
