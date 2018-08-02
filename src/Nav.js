import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <span>
            <strong>Hacker News</strong>
          </span>
          <span> </span>
          <span>
            <a href="">new</a>{" "}
          </span>{" "}
          |
          <span>
            <a href=""> comments </a>
          </span>|
          <span>
            <a href=""> show </a>{" "}
          </span>{" "}
          |
          <span>
            <a href=""> ask </a>{" "}
          </span>{" "}
          |
          <span>
            <a href=""> jobs </a>{" "}
          </span>{" "}
          |
          <span>
            <a href=""> submit </a>{" "}
          </span>
        </div>
        <div>
          <span>
            <a href=""> login </a>{" "}
          </span>
        </div>
      </div>
    );
  }
}
