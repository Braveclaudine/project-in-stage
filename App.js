
// import './App.css';
// import Menu from './components/menu/Menu'
// function App() {
//   const person={
//     name:"claudine",
//    class:"l4 swd",
//    location:'kicukiro',
    
//   }
//   return (
//     <div className="App">
//       <Menu/>
//       <h1>her/his name is:{person.name}</h1>
//     </div>
//   );
// }

// // export default App;
// import React from 'react';
// import RandNames from './components/RandNames';

// import './App.css'
// const App=()=>{
//     //define afixed random name
// const utunames=['eric','sano','mutamba','kamari','sayolyan','cedrick','yadda','mugisha','sandrine','claudine']
// const randIndex=Math.floor(Math.random()*utunames.length);
// const randomName=utunames[randIndex];
// //handle user,s gauesses
// const handleGauss=(guess)=>{
//     if(guess===randomName){
//         alert(`yes!${guess} niwe wanyawe!`);
//     }else{
//         alert(`NOTE:try again the correct name is ${randomName}`);
//     }

// }
// return(
//   <div>
//     <header className='App-header'>randomGuessor</header>
//     <RandNames onGuess={handleGauss} />
   
//   </div>
// );
// };
// export default App;
import React from 'react'
import Numbers from './components/Numbers';

const App=()=>{
  const numbers=[1,2,3,4,5,900,56,90,5];
  const randIndex=Math.floor(Math.random()*numbers.length);
  const randNumber=numbers[randIndex];
  const handleNumber=(userIns)=>{
    if(userIns===randNumber){
      alert(`yeah! this ${randNumber} is correct number`)
    }
    else{
    alert(`Failed!Try again your option is yous but correct number is${randNumber}`)
  }
  };
  return(
<div className='number'>
<Numbers Pnumber={handleNumber}/>

</div>
  );
  
};
export default App;




