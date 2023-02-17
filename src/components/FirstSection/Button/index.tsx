import './index.scss';
import { ButtonProps } from '../../../services/interfaces';

export default function Button(props: ButtonProps){
    return(
        <div className='button'>
            <div className='button-img-and-title'>
                <img src={`/assets/${props.img}`} style={{border: `2px solid ${props.imgBorderColor}`}} />
                <p style={{color: props.fontColor}}>{props.title}</p>
              </div>
              <p className='button-text'>{props.text}</p>
        </div>
    );
}