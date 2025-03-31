import React from "react";

function SeriesCard({ data }) {
    const { id, img_url, name, description, genre, rating } = data;

    let style_card = {
        textAlign: 'left',
        paddingLeft: '10px'
    }

    let style_btn = {
        backgroundColor: `${rating >= 8.5 ? "#f7dc6f" : " #7dcea0"}`
    }
    return (

        <li key={id}>
            <div className="card_img">
                <img src={img_url} alt={id} />
            </div>
            <h2 style={style_card}>name : {name}</h2>

            <h3>
                Reating :  <span className={`rating ${rating >= 8.5 ? "super_hit" : "avrage"}`} >{rating}</span>
            </h3>

            <p>Summery : {description}</p>
            <p>gener : {genre}</p>
            <button style={style_btn} className="btn" >Watch Now</button>
        </li>
    );
}

export default SeriesCard;