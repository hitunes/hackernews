import React, { Component } from "react";
import { Footer } from "./Footer";
import Time from "./Time";
import "./StoryList.css";

export default class StoryList extends Component {
  render() {
    let { News } = this.props;
    return (
      <div className="stories__wrapper">
        <ol className="stories" start={1}>
          {News.map((story, index) => (
            <li key={index}>
              <span className="story">
                <h3 className="title"> {story.title}</h3>
                <div className="subtext">
                  <span className="score">{story.score} points</span>
                  {" by "}
                  <span className="user">{story.by}</span>{" "}
                  <Time time={story.publishedAt} isUnixTime={false} />
                  {" | "}
                  <a>flag</a>
                  {" | "}
                  <a>hide</a>
                  {" | "}
                  <a>{story.descendants} comments</a>
                </div>
              </span>
            </li>
          ))}
        </ol>
        <Footer />
      </div>
    );
  }
}
