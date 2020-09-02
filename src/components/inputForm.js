import React, { Component } from "react";
import "../css/inputForm.css";

export default class inputForm extends Component {
  render() {
    return (
      <form className="inputForm">
        <div>
          <div className="close-out">X</div>
        </div>
        <div className="inputForm-div">
          <div>
            <h1 className="inputForm-Title">Title</h1>
            <input type="text" name="Title" className="title" />
          </div>
          <div>
            <h1 className="inputForm-Description">Description</h1>
            <textarea className="description"></textarea>
          </div>
          <div>
            <button className="inputForm-Button">Tackle Task</button>
          </div>
        </div>
      </form>
    );
  }
}
