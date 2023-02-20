import './index.scss';

export default function PhoneCardsContainer(props: { phoneContent: string[]; }){
    return (
        <div className='phone-card-container'>
            <span >
                <div className='phone-card-standard'>
                    <img className='standard-img' src={props.phoneContent[0]} />
                </div>
                <img className='standard-shadow' src={'/assets/standardPhoneShadow.svg'}/>
            </span>
            <span>
                <div className='phone-card-standard'>
                    <img className='standard-img' src={props.phoneContent[1]} />
                </div>
                <img className='standard-shadow' src={'/assets/standardPhoneShadow.svg'}/>
            </span>
            <span>
                <div className='phone-card-highlighted'>
                    <img className='highlighted-img' src={props.phoneContent[2]} />
                </div>
                <img className='highlighted-shadow' src={'/assets/highlightedPhoneShadow.svg'}/>
            </span>
            <span>
                <div className='phone-card-standard'>
                    <img className='standard-img' src={props.phoneContent[3]} />
                </div>
                <img className='standard-shadow' src={'/assets/standardPhoneShadow.svg'}/>
            </span>
            <span>
                <div className='phone-card-standard'>
                    <img className='standard-img' src={props.phoneContent[4]} />
                </div>
                <img className='standard-shadow' src={'/assets/standardPhoneShadow.svg'}/>
            </span>
        </div>
    );
}