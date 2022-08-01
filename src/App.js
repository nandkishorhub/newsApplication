import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  const apikey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  const setProgressValue = (progress) => {
    setProgress(progress);
  };

  return (
    <Router>
      <NavBar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              apiKey={apikey}
              setProgress={setProgressValue}
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
              setProgress={setProgress}
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
              setProgress={setProgress}
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
              setProgress={setProgress}
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
              setProgress={setProgress}
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
              setProgress={setProgress}
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
              setProgress={setProgress}
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
