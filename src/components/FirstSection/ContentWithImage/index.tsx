import './index.scss';
import ButtonsContent from '../ButtonsContent';
import Image from '../Image';

export default function ContentWithImage(){
    return(
        <div className='content-with-img-component'>
            <ButtonsContent />
            <Image />
        </div>
    );
}