import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import style from './Slider.module.scss'



const Slider = ({min, max, onChange}) => {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
    }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
    }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
    onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className={style.sliderContainer}>
            <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
                const value = Number((event.target.value), maxVal - 1);
                setMinVal(value);
                minValRef.current = value;
            }}
            className={`${style.thumb} ${style.thumbLeft}`}
            style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
                const value = Number((event.target.value), minVal + 1);
                setMaxVal(value);
                maxValRef.current = value;
            }}
            className={`${style.thumb} ${style.thumbRight}`}
            />

            <div className={style.slider}>
            <div className={style.slider__track} />
            <div ref={range} className={style.slider__range}/>
                <div className={style.divValue}>
                    <div className={style.slider__left_value}>
                        <input className={style.valInput} type="text" id="minVal" value={minVal}/>
                    </div>
                    
                    <div className={style.slider__right_value}>
                        <input className={style.valInput} type="text" id="maxVal" value={maxVal}/>
                    </div>
                </div>
            </div>
        </div>
        );
};

    Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Slider