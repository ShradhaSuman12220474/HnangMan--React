function MaskedText({text, usedLetters}){
    const letters = getAllCharacters(text,usedLetters).split('');
    return(
        <>
        {
            letters.map((letter,index)=>{
                return(
                    <span key={`letter-${index}`} className="inline-block mx-1">{letter}</span>
                )
            })
        }
        </>
    )
}


export function getAllCharacters(word , usedLetters){
    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const gussedLetters = new Set(usedLetters);
    const characters  = word.toUpperCase().split('').map(char =>{
        if(gussedLetters.has(char)){
            return char;
        }
        return '_';
    });
    return characters.join('');
}
export default MaskedText;