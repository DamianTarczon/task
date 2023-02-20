import PhoneCardsContainer from '../PhoneCardsContainer'
import './index.scss'

export default function Slider(){
    return(
        <div className='slider'>
            <img className='arrow' src='/assets/leftArrow.svg' />
            <PhoneCardsContainer />
            <img className='arrow' src='/assets/rightArrow.svg' />
        </div>
    );
}