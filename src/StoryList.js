import React, { Component } from "react";
import PropTypes from "prop-types";
import Stories from "./Stories";
import "./StoryList.css";

export default class StoryList extends Component {
  render() {
    const { stories } = this.props;
    return (
      <div>
        <ol className="stories" start={1}>
          {stories.map((story, index) => (
            <li key={story.id}>
              <Stories stories={stories} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

StoryList.propTypes = {
  stories: PropTypes.array.isRequired
};
