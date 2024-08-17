// presentaition layer
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";


function TextInputForm({inputType,setInputType,value,handleFormSubmit,handleTextInputChange}){

    
    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div>

                <TextInput 
                    label={"Enter any word or pharaphrase"}
                    type={inputType}
                    onChange={handleTextInputChange}
                    value={value}
                    

                />
                
                <div>
                    <Button 
                        styleType="warning"
                        text = {inputType === 'password' ? 'show': 'hide'}
                        onClickHandler={()=>{
                            setInputType(inputType ==='password' ? 'text' : 'password')
                        }}
                    />
                </div>
                <Button buttonType= "submit"
                text = "Ok"
                styleType = "primary"
                />


            </div>  
        </form>
    );
}

export default TextInputForm;