import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const apikey = process.env.REACT_APP_NEWS_API_KEY;
  const progressValue = useSelector((state) => state.progress);
  return (
    <Router>
      <NavBar />
      <LoadingBar color="#f11946" progress={progressValue} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apikey}
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
              apiKey={apikey}
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
              apiKey={apikey}
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
              apiKey={apikey}
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
              apiKey={apikey}
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
              apiKey={apikey}
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
              apiKey={apikey}
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
