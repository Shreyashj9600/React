
const seiresCard = (props) => {
    // const { data } = props  this is first type of Destructuring 
    const { img_url, id, name, rating, description, genre, cast, watch_url } = props.data
    
    return (
        <>
            <li key={props.ind}>
                <div>
                    <img src={img_url} alt={id} />
                </div>
                <h2>Name : {name}</h2>
                <p>Rating: {rating}</p>
                <p>Summery : {description}</p>
                <p>Genre: {genre}</p>
                <p>cast:  {cast}</p>
                <a href={watch_url} target='_blank'></a>
                <button>watch</button>
            </li>
        </>
    )
}

export default seiresCard;