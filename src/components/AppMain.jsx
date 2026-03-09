import digital from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscriptions from '../assets/img/buy-comics-subscriptions.png'
import shop from '../assets/img/buy-comics-shop-locator.png'
import visa from '../assets/img/buy-dc-power-visa.svg'

export default function AppMain() {
    return (
        <main>
            <section className="bg-dark text-white py-3">
                <div className="container">
                    <div className="row">
                        <h4 className="col-5">Content goes here</h4></div>
                </div>
            </section>

            <section className="container bg-primary py-4">
                <div className="row">
                    <div className="col text-light">
                        <img src={digital} alt="logo" width="30px"></img>
                        DIGITAL COMICS
                    </div>
                    <div className="col text-light">
                        <img src={merchandise} alt="merchandise" width="30px"></img>
                        DC MERCHANDISE
                    </div>
                    <div className="col text-light">
                        <img src={subscriptions} alt="merchandise" width="30px"></img>
                        SUBSCRIPTION
                    </div>
                    <div className="col text-light">
                        <img src={shop} alt="merchandise" width="20px"></img>
                        COMIC SHOP LOCATOR
                    </div>
                    <div className="col text-light">
                        <img src={visa} alt="merchandise" width="30px"></img>
                        DC POWER VISA
                    </div>
                </div>
            </section>

        </main>
    )
}