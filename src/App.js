import { Fragment } from "react";
import "./App.css";
import Footer from "./components/global/Footer";
import Home from "./routes/Home";

function App() {
  return (
    <Fragment>
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
