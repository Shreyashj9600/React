import seiresData from '../api/sesiesData.json'
import SeriesCard from './SeriesCard'

const NetfliexSeries = () => {

    return (
        <ul>
            {
                seiresData.map((crrEle, ind) => {
                    return <SeriesCard key={ind} data={crrEle} />
                })
            }
        </ul>
    )
}

export default NetfliexSeries;