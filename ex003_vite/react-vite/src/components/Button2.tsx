type Props = {
    text: string;
    clickFn: (txt: string) => void;
}
export const Button = ({text, clickFn}: Props) => {

    const handleButton = () => {
        clickFn('Text text text');
    }

    return (
        <button onClick={handleButton}>{text}</button>
    )
}