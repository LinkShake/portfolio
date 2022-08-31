import { Link } from "react-router-dom";
import "../../../style/SkillsPage.css";
import "../../../style/homeRoute.css";

export default function TopBanner() {
  return (
    <div className="top-banner">
      <Link to="/home" className="home-route">
        &larr; home
      </Link>
    </div>
  );
}
