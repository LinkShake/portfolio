import { Fragment } from "react";
import LazyLoad from "react-lazyload";
import "./App.css";
import Footer from "./components/global/Footer";
import Home from "./routes/Home";

function App() {
  return (
    <LazyLoad>
      <Fragment>
        <Home />
        <Footer />
      </Fragment>
    </LazyLoad>
  );
}

export default App;
