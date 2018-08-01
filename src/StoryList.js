import React, { Component } from "react";
import PropTypes from "prop-types";
import Time from "./Time";
import "./StoryList.css";

export default class StoryList extends Component {
  render() {
    let { stories } = this.props;
    return (
      <div>
        <ol className="stories" start={1}>
          {stories.map(story => (
            <li key={story.id}>
              <span className="story">
                <h3 className="title">{story.title}</h3>
                <div className="subtext">
                  <span className="score">{story.score} points</span>
                  {" by "}
                  <span className="user">{story.by}</span>{" "}
                  <Time time={story.time} isUnixTime={true} />
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
      </div>
    );
  }
}

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
  story: PropTypes.object.isRequired
};
