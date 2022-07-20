import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={this.apikey}
                setProgress={this.setProgress}
                key="general"
                pageSize={20}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apiKey={this.apikey}
                setProgress={this.setProgress}
                key="business"
                pageSize={20}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={this.apikey}
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={20}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={this.apikey}
                setProgress={this.setProgress}
                key="health"
                pageSize={20}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={this.apikey}
                setProgress={this.setProgress}
                key="science"
                pageSize={20}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={this.apikey}
                setProgress={this.setProgress}
                key="sports"
                pageSize={20}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={this.apikey}
                setProgress={this.setProgress}
                key="technology"
                pageSize={20}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
