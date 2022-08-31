import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import SkillsPage from "./routes/SkillsPage";
import ProjectsPage from "./routes/ProjectsPage";
import PageNotFound from "./routes/PageNotFound";
import LazyLoad from "react-lazyload";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route
          path="/"
          element={
            <LazyLoad offset={0}>
              <LandingPage />
            </LazyLoad>
          }
        />
        <Route
          path="/home"
          element={
            <LazyLoad offset={0}>
              <App />
            </LazyLoad>
          }
        />
        <Route
          path="/skills-page"
          element={
            <LazyLoad offset={0}>
              <SkillsPage />
            </LazyLoad>
          }
        />
        <Route
          path="/projects-page"
          element={
            <LazyLoad offset={0}>
              <ProjectsPage />
            </LazyLoad>
          }
        />
        <Route
          path="*"
          element={
            <LazyLoad offset={0}>
              <PageNotFound />
            </LazyLoad>
          }
        />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
