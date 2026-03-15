import digital from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscriptions from '../assets/img/buy-comics-subscriptions.png'
import shop from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'
import AppCard from './AppCard'

export default function AppMain({ comics }) {
    return (
        <main>
            <div className="jumbotron"></div>
            <section className="bg-dark text-white px-5 pb-4">
                <span className="series bg-primary p-2 px-4">CURRENT SERIES</span>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 rounded-0 m-5">

                        {comics.map((comic) => (
                            <AppCard key={comic.id} comic={comic} />
                        ))}

                    </div>
                    <div className="text-center">
                        <span className="bg-primary p-2 px-5">LOAD MORE</span>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-4">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col text-light">
                            <img src={digital} alt="logo" width="40px" className="mx-2"></img>
                            DIGITAL COMICS
                        </div>
                        <div className="col text-light">
                            <img src={merchandise} alt="merchandise" width="40px" className="mx-2"></img>
                            DC MERCHANDISE
                        </div>
                        <div className="col text-light">
                            <img src={subscriptions} alt="merchandise" width="40px" className="mx-2"></img>
                            SUBSCRIPTION
                        </div>
                        <div className="col text-light">
                            <img src={shop} alt="merchandise" width="30px" className="mx-2"></img>
                            COMIC SHOP LOCATOR
                        </div>
                        <div className="col text-light">
                            <img src={visa} alt="merchandise" width="40px" className="mx-2"></img>
                            DC POWER VISA
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}