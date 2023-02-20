import Title from '../FirstSection/Ttitle';
import './index.scss'
import titleData from '../../data/titleData';
import Slider from './Slider';

export default function ThirdSection(){
    const titleInfo = titleData[0].thirdSection;

    return(
        <div className='third-section'>
            <Title 
                firstText={titleInfo.firstText}
                secondText={titleInfo.secondText}
                thirdText={titleInfo.thirdText}
            />
            <Slider />
        </div>
    );
}