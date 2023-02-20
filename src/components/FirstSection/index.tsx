import './index.scss';
import Title from './Ttitle';
import ContentWithImage from './ContentWithImage';
import titleData from '../../data/titleData';

export default function FirstSection(){
    const titleInfo = titleData[0].firstSection;

    return(
        <div className='first-section'>
            <Title
                firstText={titleInfo.firstText}
                secondText={titleInfo.secondText}
                thirdText={titleInfo.thirdText}
            />
            <ContentWithImage />
        </div>
    );
}