import './index.scss';

export default function Title(props: any){
    return(
        <div className='title-component'>
            <p className='first-text'>{props.firstText}</p>
            <p className='second-text'>{props.secondText}</p>
            <p className='third-text'>{props.thirdText}</p>
        </div>
    );
}