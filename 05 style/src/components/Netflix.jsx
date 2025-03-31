import React from 'react'
import seriesData from '../api/seriesData.json'
import SeriesCard from './SeriesCard';

function Netflix() {

    return (
        <div>
            <ul className='grid grid-three--cols container'>
                {
                    seriesData.map((item) => {
                        return (
                            <SeriesCard key={item.id} data={item} />
                        )
                    })
                }
            </ul>   
        </div>
    )
}

export default Netflix; 