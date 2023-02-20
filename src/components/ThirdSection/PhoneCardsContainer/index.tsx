import './index.scss';

export default function PhoneCardsContainer(props: any){
    return (
        <div className='phone-card-container'>
            <span className='phone-card-standard'><img src={props.phoneContent[0]} /></span>
            <span className='phone-card-standard'><img src={props.phoneContent[1]} /></span>
            <span className='phone-card-highlighted'><img src={props.phoneContent[2]} /></span>
            <span className='phone-card-standard'><img src={props.phoneContent[3]} /></span>
            <span className='phone-card-standard'><img src={props.phoneContent[4]} /></span>
        </div>
    );
}