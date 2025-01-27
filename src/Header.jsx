import logo from './assets/winkporing.png'
import './Header.css'

export default function Card() {

    return (
        <>
        <header id="app_header">
        <nav className="navbar navbar-expand-lg d-flex flex-row">
        <div className="container" id="header1">
          <a className="navbar-brand pc" href="./index.html"
            ><img id="logo" src={logo} alt="logo"
          /></a>
        </div>
        <div className="container-fluid d-flex flex-column" id="header2">
          <h1>Tyrfing's Den</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id="spanheader"></span>
          </button>
          <div
            className="collapse navbar-collapse customnav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link" href="./">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">Cours</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">TP</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
      </>
  );
  }


