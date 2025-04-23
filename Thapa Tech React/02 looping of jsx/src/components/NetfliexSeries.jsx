import seiresData from '../api/sesiesData.json'

const NetfliexSeries = () => {

    return (
        <ul>
            {
                seiresData.map((item, ind) => {
                    return (
                        <li key={ind}>
                            <div>
                                <img src={item.img_url} alt={seiresData[0].id} />
                            </div>
                            <h2>Name : {item.name}</h2>
                            <p>Rating: {item.rating}</p>
                            <p>Summery : {item.description}</p>
                            <p>Genre: {item.genre}</p>
                            <p>cast:  {item.cast}</p>
                            <a href={item.watch_url} target='_blank'></a>
                            <button>watch</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NetfliexSeries;