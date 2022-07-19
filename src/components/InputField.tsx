import React, {useRef, useState} from 'react';
import './styles.css';

interface Props {
    handleAdd: (text: string) => void;
}

const InputField: React.FC<Props> = ({handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState("")

    return (
        <form className="input" onSubmit={($event) => {
            $event.preventDefault();
            inputRef.current?.blur();
            handleAdd(inputText)
            setInputText("")
        }}>
            <input
                data-testid={"InputFieldInput"}
                ref={inputRef}
                type="input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter a task" className="input_box"/>
            <button data-testid={"InputFieldGoButton"} className='input_submit' type='submit'>
                Go
            </button>
        </form>
    )
}

export default InputField