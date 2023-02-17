import './index.scss';
import Content from '../Content';
import Image from '../Image';

export default function ContentWithImage(){
    return(
        <div className='content-with-img-component'>
            <Content />
            <Image />
        </div>
    );
}