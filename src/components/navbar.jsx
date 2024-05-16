import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h2 className="logo">GeoCode Nexus</h2>
      </div>

      <ul className="nav-items">
        <li className="nav-link">
          <Link to="/">Acceuil</Link>
        </li>
        <li className="nav-link">
          <a>a propos</a>
        </li>
        <li className="nav-link">
          <a>equipe</a>
        </li>
      </ul>
    </nav>
  );
}
