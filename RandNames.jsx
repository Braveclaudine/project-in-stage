import React from 'react'
const RandNames=({onGuess})=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        const guess=e.target.elements.name.value.trim();
        onGuess(guess);//pass the input on the parent
e.target.reset();//clear input after submission
    };
    return(
        
        <form onSubmit={handleSubmit}>
<label htmlFor="name">Enter a Guessor:{''}
<input type="text" name="name" id="name" />

</label>
<button type="submit">Guess</button>
        </form>
    );
};
export default RandNames;