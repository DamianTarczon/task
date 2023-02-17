import './index.scss';
import Button from '../Button';
import buttonsData from '../../../data/buttonsData';
import { ButtonProps } from '../../../services/interfaces';

export default function Content(){
    const buttons = buttonsData.map((button: ButtonProps) => {
        return(
            <Button
                key={button.id}
                id={button.id}
                title={button.title}
                text={button.text}
                img={button.img}
                fontColor={button.fontColor}
                imgBorderColor={button.imgBorderColor}
            />
        );
    });

    return(
        <div className='content'>
            {buttons}
        </div>
    );
}