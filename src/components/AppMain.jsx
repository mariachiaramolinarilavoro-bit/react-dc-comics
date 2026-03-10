import digital from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscriptions from '../assets/img/buy-comics-subscriptions.png'
import shop from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'
import comics from '../components/comics'

export default function AppMain() {
    return (
        <main>
            <div className="jumbotron"></div>
            <section className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 rounded-0">

                        {comics.map((comic) => {
                            return (
                                <div className="col" key={comic.id}>
                                    <div className="card-body">
                                        <img src={comic.thumb} className="card-img-top" />
                                        <div className="col text-uppercase card-title">{comic.series}</div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        
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