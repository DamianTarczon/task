import './index.scss';
import Carousel from 'react-spring-3d-carousel';
import { useState } from 'react';

export default function PhoneCardsContainer(props: any){


    const cards = [
        {
          key: 1,
          content: <span >
                        <div className='phone-card-highlighted'>
                            <img className='highlighted-img' src={props.phoneContent[0]} />
                        </div>
                        <img className='highlighted-shadow' src={'/assets/highlightedPhoneShadow.svg'}/>
                    </span>
        },
        {
          key: 2,
          content: <span>
                        <div className='phone-card-highlighted'>
                            <img className='highlighted-img' src={props.phoneContent[1]} />
                        </div>
                        <img className='highlighted-shadow' src={'/assets/highlightedPhoneShadow.svg'}/>
                    </span>
        },
        {
          key: 3,
          content: <span>
                        <div className='phone-card-highlighted'>
                            <img className='highlighted-img' src={props.phoneContent[2]} />
                        </div>
                        <img className='highlighted-shadow' src={'/assets/highlightedPhoneShadow.svg'}/>
                    </span>
        },
        {
          key: 4,
          content: <span>
                        <div className='phone-card-highlighted'>
                            <img className='highlighted-img' src={props.phoneContent[3]} />
                        </div>
                        <img className='highlighted-shadow' src={'/assets/highlightedPhoneShadow.svg'}/>
                    </span>
        },
        {
          key: 5,
          content: <span>
                        <div className='phone-card-highlighted'>
                            <img className='highlighted-img' src={props.phoneContent[4]} />
                        </div>
                        <img className='highlighted-shadow' src={'/assets/highlightedPhoneShadow.svg'}/>
                    </span>
        }
      ];

    return (
        <div className='phone-card-container'>
            <Carousel slides={cards} goToSlide={props.goToSlide} offsetRadius={2} showNavigation={false} />
        </div>
    );
}