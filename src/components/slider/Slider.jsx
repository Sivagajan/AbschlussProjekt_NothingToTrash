import ReactSlider from 'react-slider'

const Slider = (props) => {

    let min ;
    let max
    return(
        <div className='slider'>
            <ReactSlider 
                defaultValue={[min, max]} 
                className='slider'
                trackClassName='tracker'
                min={0}
                max={200}
                step={1}
                withTracks={true}
                pearling={true}
                onChange={([min, max]) => {
                    props.setmin(min)
                    props.setmax(max)
                }}/>
        </div>
    )
}

export default Slider