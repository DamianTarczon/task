import './index.scss';
import { BoxProps } from '../../../services/interfaces';

export default function Box(props: BoxProps){

    function ConvertNumber(number: number): string{
        let result: string = '';
        if(number.toString().length > 4){
            result = `${number.toString().split('').slice(0, 2).join('')}K`;
        } else if(number.toString().length == 4){
            result = `${number.toString().split('').slice(0, 2).join('')}00`;
        } else {
            result = `${number.toString().split('').slice(0, 2).join('')}0`
        }
        return result;
    }

    return(
        <div className='box'>
            <img className='box-img' src={`/assets/${props.image}`} />
            <p className='number'>{ConvertNumber(props.number)}+</p>
            <p className='text'>{props.text}</p>
        </div>
    );
}