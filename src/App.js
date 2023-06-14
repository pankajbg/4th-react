
 import { useState } from "react";
function App() {
 return(
<>
 <h1>Counter</h1>
<CounterApp/>
<CounterApp/>
<CounterApp/>
</>

 );
}

  function CounterApp(){
    let[counter,setCounter]=useState(1);
    let LikemeAction=()=>{
     counter =counter+1;
     setCounter(counter);
    }
    
    let DisLikemeAction=()=>{
     counter =counter-1;
     setCounter(counter);
    }
   

return(
<>
 <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ad in nam, quod esse voluptas incidunt eius aspernatur est enim voluptate, aperiam consequuntur, dolorum delectus mollitia unde fuga accusantium accusamus.</h4>
<h1>{counter}</h1>
<input type="button" value="👍" onClick={LikemeAction} />
<input type="button" value="👎" onClick={DisLikemeAction} />

</>


);
  }


export default App;


