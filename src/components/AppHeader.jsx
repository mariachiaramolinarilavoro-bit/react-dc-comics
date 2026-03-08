import logo from '../assets/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="dc-logo" width="40" />
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">CHARACTERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">COMICS</a>
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
            </nav>
        </header>
    )
}