import { useState } from 'react';
import PhoneCardsContainer from '../PhoneCardsContainer';
import './index.scss';

export default function Slider(){
    const [phoneContent, setPhoneContent] = useState<string[]>([
        '/assets/phoneCardContent3.png', 
        '/assets/phoneCardContent2.png', 
        '/assets/phoneCardContent1.png', 
        '/assets/phoneCardContent4.png',
        '/assets/phoneCardContent5.png'
    ]);

    function handleClickRight(){
        const newPhoneContent= phoneContent.slice(1).concat(phoneContent.slice(0,1));
        setPhoneContent(newPhoneContent);
    }

    function handleClickLeft(){
        const newPhoneContent= phoneContent.slice(4).concat(phoneContent.slice(0,4));
        setPhoneContent(newPhoneContent);
    }

    return(
        <div className='slider'>
            <img className='arrow' onClick={handleClickLeft} src='/assets/leftArrow.svg' />
            <PhoneCardsContainer 
                phoneContent={phoneContent}
            />
            <img className='arrow' onClick={handleClickRight} src='/assets/rightArrow.svg' />
        </div>
    );
}