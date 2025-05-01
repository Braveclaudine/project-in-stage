import React from "react";
const Number=({Pnumber})=>{
  
        const event=(e)=>{
            e.preventDefault();
        const userIns=e.target.elements.number.value.trim();
        Pnumber(userIns);
        e.target.reset();
    };
    return(
<form onSubmit={event}>
    <label htmlFor="number">Number
<input type="number" name="number" id="number" />



    </label>
    <button type="submit">submit</button>
</form>

    );
    };export default Number;
