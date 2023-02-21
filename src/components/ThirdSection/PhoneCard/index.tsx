import { PhoneCardProps } from '../../../services/interfaces';
import './index.scss';

export default function PhoneCard(props: PhoneCardProps){
    return(
        <span >
            <div className={props.divClassName}>
                <img className={props.phoneImgClassName} src={props.phoneImgSrc} />
            </div>
            <img className={props.shadowImgClassName} src={props.shadowImgSrc}/>
        </span>
    );
}