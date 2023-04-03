import { memo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getSliders } from '../../store/actions/sliders.action';

const Slider = () => {

    const dispatch = useDispatch();

    const sliders = useSelector(state => state.slidersReducer);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        dispatch(getSliders());
    }, []);

    return (
        <Carousel indicators={false} controls={false} activeIndex={index} onSelect={handleSelect}>
            {sliders.data.map((slider, index) =>
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={slider.image}
                        alt="First slide"
                    />
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default memo(Slider);