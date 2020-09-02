import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Card from "./components/card";
import InputForm from "./components/inputForm";
import "./css/app.css";
import { Button } from 'reactstrap';

export default class App extends Component {
  
  state = {
    tasks: [
      {
        title: "Doing My Homework",
        description: "Functional programming: homework 1, Matrices: pset 2"
      },
      {
        title: "Cleaning My Room",
        description: "Mopping the floor, cleaning my desk"
      },
      {
        title: "Making Dinner",
        description: "Cut the onions, make the eggs"
      },
      {
        title: "Making Dinner",
        description: "Cut the onions, make the eggs"
      },
      {
        title: "Making Dinner",
        description: "Cut the onions, make the eggs"
      },
      {
        title: "Making Dinner",
        description: "Cut the onions, make the eggs"
      }
    ],
    isOpened: false,

  }
  render() {
    return (
        <div className = "main-div">
          {this.state.isOpened && <InputForm/>}
          <div className = "header-div">
            <h1>GOOD MORNING, ADAM!</h1>
            <h2>"If you want to achieve your goal, do not try to be clever or sensitive. Use rough methods. Hit the target once. Go back and hit again. Then hit again - a major kick straight from the shoulder" - Winston Churchill</h2>
          </div>
          <div className = "button-div">
            <button onClick = {() => this.setState({isOpened: !this.state.isOpened})}>Add A New Task</button>
          </div>
          <div className = "body-div">
            {this.state.tasks.map((task, index) => <Card key = {index + task.title} task = {task}/>)}
          </div>
        </div>
    );
  }
}
