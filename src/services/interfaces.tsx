export interface ButtonProps {
    id: number;
    title: string;
    text: string;
    img: string;
    fontColor: string;
    imgBorderColor: string;
    isActive: boolean;
    handleClick?(id: number): void;
}

export interface ButtonsStats {
    1: number;
    2: number;
    3: number;
}

export interface BoxProps {
    id: number;
    image: string;
    number: number;
    text: string;
}