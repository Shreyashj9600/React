const SeriesCard = (props) => {
    // const { data } = props  this is first type of Destructuring 
    const { img_url, id, name, rating, description, genre, cast, watch_url } = props.data

    return (
        <>
            <li key={props.ind}>
                <div>
                    <img src={img_url} className="webImage" alt={id} />
                </div>
                <h2>Name : {name}</h2>
                <p>Rating: {rating}</p>
                <p>Summery : {description}</p>
                <p>Genre: {genre}</p>
                <p>cast:  {cast}</p>
                <button><a href={watch_url} target='_blank'>watch</a> </button>
            </li>
        </>
    )
}

export default SeriesCard;