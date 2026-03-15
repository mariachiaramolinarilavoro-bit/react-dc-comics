export default function AppCard({ comic }) {
    return (
        <div className="col col-sm-5 col-md-4 col-lg-3">
            <div className="card-body">
                <img src={comic.thumb} className="img-card card-img-top" alt={comic.title} />
                <div className="col text-uppercase card-title p-2">{comic.series}</div>
            </div>
        </div>
    )
}