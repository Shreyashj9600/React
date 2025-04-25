import seiresData from '../api/seriesData.json'
import SeriesCard from './SeriesCard'

const NetfliexSeries = () => {

    return (
        <ul className='grid grid-three--cols'>
            {
                seiresData.map((crrEle, ind) => {
                    return <SeriesCard key={ind} data={crrEle} />
                })
            }
        </ul>
    )
}

export default NetfliexSeries;