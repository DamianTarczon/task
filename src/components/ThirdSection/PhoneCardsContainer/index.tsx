import './index.scss';
import Carousel from 'react-spring-3d-carousel';
import PhoneCard from '../PhoneCard';

export default function PhoneCardsContainer(props: {goToSlide: number}){
    const phoneCardImg = [
        '/assets/phoneCardContent3.png', 
        '/assets/phoneCardContent2.png', 
        '/assets/phoneCardContent1.png', 
        '/assets/phoneCardContent4.png',
        '/assets/phoneCardContent5.png'
    ];

    function modulo(n: number, m: number): number {
        return ((n % m) + m) % m;
      }

    const cards = [
        {
          key: 1,
          content: <PhoneCard 
                        divClassName={`phone-card-highlighted ${modulo(props.goToSlide, 5) != 0 ? 'standard' : ''}`}
                        phoneImgClassName='highlighted-img'
                        phoneImgSrc={phoneCardImg[0]}
                        shadowImgClassName='highlighted-shadow'
                        shadowImgSrc='/assets/highlightedPhoneShadow.svg'
                    />
        },
        {
          key: 2,
          content: <PhoneCard 
                        divClassName={`phone-card-highlighted ${modulo(props.goToSlide, 5) != 1 ? 'standard' : ''}`}
                        phoneImgClassName='highlighted-img'
                        phoneImgSrc={phoneCardImg[1]}
                        shadowImgClassName='highlighted-shadow'
                        shadowImgSrc='/assets/highlightedPhoneShadow.svg'
                    />
        },
        {
          key: 3,
          content: <PhoneCard 
                        divClassName={`phone-card-highlighted ${modulo(props.goToSlide, 5) != 2 ? 'standard' : ''}`}
                        phoneImgClassName='highlighted-img'
                        phoneImgSrc={phoneCardImg[2]}
                        shadowImgClassName='highlighted-shadow'
                        shadowImgSrc='/assets/highlightedPhoneShadow.svg'
                    />
        },
        {
          key: 4,
          content: <PhoneCard 
                        divClassName={`phone-card-highlighted ${modulo(props.goToSlide, 5) != 3 ? 'standard' : ''}`}
                        phoneImgClassName='highlighted-img'
                        phoneImgSrc={phoneCardImg[3]}
                        shadowImgClassName='highlighted-shadow'
                        shadowImgSrc='/assets/highlightedPhoneShadow.svg'
                    />
        },
        {
          key: 5,
          content: <PhoneCard 
                        divClassName={`phone-card-highlighted ${modulo(props.goToSlide, 5) != 4 ? 'standard' : ''}`}
                        phoneImgClassName='highlighted-img'
                        phoneImgSrc={phoneCardImg[4]}
                        shadowImgClassName='highlighted-shadow'
                        shadowImgSrc='/assets/highlightedPhoneShadow.svg'
                    />
        }
      ];

    return (
        <div className='phone-card-container'>
            <Carousel slides={cards} goToSlide={props.goToSlide} offsetRadius={2} showNavigation={false} />
        </div>
    );
}