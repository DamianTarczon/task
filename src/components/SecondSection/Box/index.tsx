import './index.scss';
import { BoxProps } from '../../../services/interfaces';
import CountUp from 'react-countup';

export default function Box(props: BoxProps){

    function ConvertNumber(number:number): number{
        if(number.toString().length < 3) return number
        if(number.toString().length > 4) return Number(number.toString().split('').slice(0,2).join(''));
        return Math.floor((number/100))*100;
    }


    return(
        <div className='box'>
            <img className='box-img' src={`/assets/${props.image}`} />
            <p className='number'>
                <CountUp
                    start={0}
                    end={ConvertNumber(props.number)}
                    duration={3}
                    useEasing={true}
                />
                {props.number.toString().length > 4 ? 'K+' : props.number.toString().length > 2 ? '+' : ''}
            </p>
            <p className='text'>{props.text}</p>
        </div>
    );
}