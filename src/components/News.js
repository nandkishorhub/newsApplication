import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let newsUrl =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e93f80079cd54a19a5b3f8957cdb84a2&page=1&pageSize=20";
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticle: parsedData.totalResults,
    });
  }

  onPreviousClick = async () => {
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e93f80079cd54a19a5b3f8957cdb84a2&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  onNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalArticle / 20)) {
      let newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e93f80079cd54a19a5b3f8957cdb84a2&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(newsUrl);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imgUrl={article.urlToImage}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary mx-3"
            onClick={this.onPreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onNextClick}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticle / 20)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
