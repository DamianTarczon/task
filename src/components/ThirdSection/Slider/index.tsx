import { useState } from 'react';
import PhoneCardsContainer from '../PhoneCardsContainer';
import './index.scss';

export default function Slider(){
    const [goToSlide, setGoToSlide] = useState<number>(0);

    function handleClickRight(){
        setGoToSlide(goToSlide + 1);
    }

    function handleClickLeft(){
        setGoToSlide(goToSlide - 1)
    }

    return(
        <div className='slider'>
            <img className='arrow' onClick={handleClickLeft} src='/assets/leftArrow.svg' />
            <PhoneCardsContainer 
                goToSlide={goToSlide}
            />
            <img className='arrow' onClick={handleClickRight} src='/assets/rightArrow.svg' />
        </div>
    );
}