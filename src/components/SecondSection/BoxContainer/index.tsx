import './index.scss'
import Box from '../Box';
import boxData from '../../../data/boxData';
import { BoxProps } from '../../../services/interfaces';

export default function BoxContainer(){

const boxes = boxData.map((data: BoxProps) => {
    return(
        <Box 
            key={data.id}
            id={data.id}
            image={data.image}
            number={data.number}
            text={data.text}
        />
    );
})

    return(
        <div className='box-container'>
            {boxes}
        </div>
    );
}