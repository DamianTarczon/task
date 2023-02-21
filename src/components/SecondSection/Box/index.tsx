import './index.scss';
import { BoxProps } from '../../../services/interfaces';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Box(props: BoxProps){
    const { ref: myRef, inView: elementVisible } = useInView({
        triggerOnce: true
    });

    function ConvertNumber(number:number): number{
        if(number.toString().length < 3) return number
        if(number.toString().length > 4) return Number(number.toString().split('').slice(0,2).join(''));
        return Math.floor((number/100))*100;
    }

    return(
        <div ref={myRef} className={`box ${elementVisible ? 'show' : 'hidden'}`}>
            <img className='box-img' src={`/assets/${props.image}`} />
            <p className='number'>
                <CountUp
                    start={0}
                    end={ConvertNumber(props.number)}
                    duration={4}
                    useEasing={true}
                    redraw={elementVisible}
                />
                {props.number.toString().length > 4 ? 'K+' : props.number.toString().length > 2 ? '+' : ''}
            </p>
            <p className='text'>{props.text}</p>
        </div>
    );
}