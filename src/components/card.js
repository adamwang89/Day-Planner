import React, { Component } from 'react';
import "../css/card.css";

export default class card extends Component {
    render() {
        return (
            <div className = "card-body">
                <div className = "card-body-content">
                    <h1>{this.props.task.title}</h1>
                    <h2>{this.props.task.description}</h2>
                </div>
                <button>x</button>
            </div>
        )
    }
}
