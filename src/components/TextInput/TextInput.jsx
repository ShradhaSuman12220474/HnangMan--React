function TextInput({label, type='text',value, onChange}){
    return (
        <label className="block">
            {/* short circutting */}
            {label && <span className="text-grey-700">{label}</span>} 

            <input 

                type={type}
                className="px-4 py-2 border border-grey-500 rounded-md w-full"
                onChange={onChange}
                placeholder={label}
                // value={value}
            
            />

        </label>
    );

}

export default TextInput;