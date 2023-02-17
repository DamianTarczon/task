import './index.scss';
import Title from './Ttitle';
import ContentWithImage from './ContentWithImage';

export default function FirstSection(){
    return(
        <div className='first-section'>
            <Title />
            <ContentWithImage />
        </div>
    );
}