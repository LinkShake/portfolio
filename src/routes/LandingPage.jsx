import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/LandingPage.css";

export default function LandingPage() {
  return (
    <Fragment>
      <div className="landing-page">Born to discover</div>
      <Link to="/home" className="explore-route">
        explore
      </Link>
    </Fragment>
  );
}
