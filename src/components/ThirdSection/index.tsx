import Title from '../FirstSection/Ttitle';
import './index.scss'
import titleData from '../../data/titleData';
import Slider from './Slider';
import { TitleProps } from '../../services/interfaces';

export default function ThirdSection(){
    const titleInfo: TitleProps = titleData[0].thirdSection;

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