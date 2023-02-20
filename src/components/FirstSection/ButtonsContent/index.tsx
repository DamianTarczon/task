import './index.scss';
import Button from '../Button';
import buttonsData from '../../../data/buttonsData';
import { ButtonProps } from '../../../services/interfaces';
import { useState } from 'react';
import { ButtonsStats } from '../../../services/interfaces';

export default function Content(){
    const [buttons, setButtons] = useState(buttonsData);
    const [buttonsStats, setButtonsStats] = useState<ButtonsStats>({
        1: 0,
        2: 0,
        3: 0
    })

    function handleClick(id: number){
        setButtons(buttons.map(button => ({...button, isActive: button.id === id ? true : false})));
        buttons.forEach(button => {
            if(button.id === id){
                setButtonsStats(prevState => ({
                    ...prevState,
                    [id]: button.isActive ? prevState[id as keyof ButtonsStats] : prevState[id as keyof ButtonsStats] + 1
                }))
            }
        })
    }
    console.log(buttonsStats)

    const buttonComponents = buttons.map((button: ButtonProps) => {
        return(
            <Button
                key={button.id}
                id={button.id}
                title={button.title}
                text={button.text}
                img={button.img}
                fontColor={button.fontColor}
                imgBorderColor={button.imgBorderColor}
                isActive={button.isActive}
                handleClick={handleClick}
            />
        );
    });


    return(
        <div className='buttons-content'>
            {buttonComponents}
        </div>
    );
}