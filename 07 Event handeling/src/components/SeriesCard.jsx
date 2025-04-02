import styles from './Netflix.module.css'
import React from "react";
import styled from 'styled-components'


function SeriesCard({ data }) {
    const { id, img_url, name, description, genre, rating } = data;

    let style_card = {
        textAlign: 'left',
        paddingLeft: '10px'
    }

    // let style_btn = {
    //     backgroundColor: `${rating >= 8.5 ? "#f7dc6f" : " #7dcea0"}`
    // }

    const Button = styled.button({
          backgroundColor: `${rating >= 8.5 ? "#f7dc6f" : " #7dcea0"}`,
          color: "red",
          borderRadius : "90px"
    })
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

            {/* <button style={style_btn} className="btn" >Watch Now</button> */}
            <Button className="btn" >Watch Now</Button>

        </li>
    );
}

export default SeriesCard; 