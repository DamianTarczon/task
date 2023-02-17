import './index.scss';
import Button from '../Button';
import buttonsData from '../../../data/buttonsData';

export default function Content(){
    const buttons = buttonsData.map((button: any) => {
        return(
            <Button
                key={button.id}
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