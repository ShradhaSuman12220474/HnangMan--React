// conatiner layer

import TextInputForm from "./TextInputForm";
import { useState } from "react";


function TextInputFormContainer({onSubmit}){
    const [value,setValue] = useState('');//state variable
    const [inputType, setInputType] = useState('password');

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submited");
        onSubmit?.(value); // if onSubmit is defined, call it with the value
        console.log(value);
    }
    function handleTextInputChange(event){
        console.log(event.target.value);
        setValue(event.target.value);// closely monitored whenever user writes and any change happens
    }

    return(
        <TextInputForm 
            inputType={inputType}
            setInputType={setInputType}
            value={value}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
        />
    )
}

export default TextInputFormContainer;