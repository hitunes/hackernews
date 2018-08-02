import React, { Component } from "react";
import StoryList from "./StoryList";
import Nav from "./Nav";

export default class App extends Component {
  state = {
    articles: [],
    counter: 1
  };
  getArticles = () => {
    const BASE_URL =
      "https://newsapi.org/v2/everything?" +
      "q=Apple&" +
      "from=2018-08-01&" +
      "sortBy=popularity&" +
      `page=${this.state.counter}&` +
      "apiKey=c109e652fec84e6081f8d34e5e47ae57";
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        const articles = data.articles;
        this.setState({
          articles:
            this.state.articles.length > 0
              ? [...this.state.articles, ...articles]
              : articles
        });
      });
  };
  componentDidMount() {
    this.getArticles();
  }

  Window = (window.onscroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      this.setState({ counter: this.state.counter + 1 });
      this.getArticles();
    }
  });
  render() {
    let { articles } = this.state;
    return (
      <div>
        <Nav />
        <StoryList News={articles} />
      </div>
    );
  }
}
