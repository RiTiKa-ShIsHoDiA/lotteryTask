/*
   lottery task

  
*/
function generatedNumber(){
    let arr = [10,20,51,29,90,40,27,100];
    let num = arr[parseInt(Math.random()*arr.length)];
    return num;
}
function Lottery(){
    let num = generatedNumber();
//short-circuit 
   /* let para = (num === 100) && <div><h1>Congratulations! You won lottery.</h1><img src = "you-won.gif" height="200px" width = "400px"/></div>
    if(para === false){
        para = <h1>Sorry! Better luck for next time!</h1>
    }*/
//ternary operator 
    let para = (num === 100) ? <div><h1>Congratulations! You won lottery.</h1><img src = "you-won.gif" height="200px" width = "400px"/></div>:<h1>Sorry! Better luck for next time!</h1>;
    
    return (
        <section>
            <h1>You got {num}</h1>
            {para}
        </section>
    );
}
ReactDOM.render(<Lottery/>,document.querySelector("div"));

