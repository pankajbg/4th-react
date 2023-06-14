
 import { useState } from "react";
function App() {
 return(
<>
 <h1>String</h1>
<StringDemo/>
</>

 );
}

  function StringDemo(){
    let[title,setTitle]=useState("Hello World");
    let lowercaseAction=()=>{
      title =title.toLowerCase();
      setTitle(title);
    }
    let uppercaseAction=()=>{
      title =title.toUpperCase();
      setTitle(title);
    }

return(
<>
<h1>{title}</h1>
<input type="button" value="LowerCase" onClick={lowercaseAction} />
<input type="button" value="Uppercase" onClick={uppercaseAction} />

</>


);
  }


export default App;


