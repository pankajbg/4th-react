
 
function CounterApp() {

let counter =1;
let likemeAction =()=>{
  counter =counter+1;
}

  return (
    <>
   <h1>{counter}</h1>
   <input type="button" value="like me" onclick={likemeAction}></input>
    </>
  
  );
  

}
export default CounterApp;


