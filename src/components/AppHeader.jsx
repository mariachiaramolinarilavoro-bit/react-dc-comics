import logo from '../assets/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="dc-logo" width="60" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">CHARACTERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="string nav-link active text-primary" aria-current="page" href="#">COMICS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">MOVIE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">GAMES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">COLLECTIBLES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">VIDEOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">FANS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">SHOP</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}