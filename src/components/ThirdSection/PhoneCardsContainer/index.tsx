import PhoneCard from '../PhoneCard';
import './index.scss';

export default function PhoneCardsContainer(props: { phoneContent: string[]; }){
    return (
        <div className='phone-card-container'>
            <PhoneCard
                divClassName='phone-card-standard'
                phoneImgClassName='standard-img'
                phoneImgSrc={props.phoneContent[0]}
                shadowImgClassName='standard-shadow'
                shadowImgSrc='/assets/standardPhoneShadow.svg'
            />
            <PhoneCard
                divClassName='phone-card-standard'
                phoneImgClassName='standard-img'
                phoneImgSrc={props.phoneContent[1]}
                shadowImgClassName='standard-shadow'
                shadowImgSrc='/assets/standardPhoneShadow.svg'
            />
            <PhoneCard
                divClassName='phone-card-highlighted'
                phoneImgClassName='highlighted-img'
                phoneImgSrc={props.phoneContent[2]}
                shadowImgClassName='highlighted-shadow'
                shadowImgSrc='/assets/highlightedPhoneShadow.svg'
            />
            <PhoneCard
                divClassName='phone-card-standard'
                phoneImgClassName='standard-img'
                phoneImgSrc={props.phoneContent[3]}
                shadowImgClassName='standard-shadow'
                shadowImgSrc='/assets/standardPhoneShadow.svg'
            />
            <PhoneCard
                divClassName='phone-card-standard'
                phoneImgClassName='standard-img'
                phoneImgSrc={props.phoneContent[4]}
                shadowImgClassName='standard-shadow'
                shadowImgSrc='/assets/standardPhoneShadow.svg'
            />
        </div>
    );
}