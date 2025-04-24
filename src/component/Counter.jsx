import { useState } from "react";
import Input from "./Input";
function Counter({ email, token }){
// let[slate,setSlate]=useState("https://th.bing.com/th/id/OIP.0vNn0Nt_uuPHMJO74MElOAHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7");

// const addCount=()=>{
// setSlate("https://th.bing.com/th/id/OIP.acfXucL52_3l_HMNHRwXtAHaEK?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")    
// console.log(slate);


// };


    return(
      //   <div >
      //    <img src={slate} width={500} height={300} />
      //   <br />
      //   <button onClick={addCount}>IncCount</button>
       
      // </div>

<div style={{ marginTop: '20px' }}>
<h3>Submitted Data:</h3>
<p><strong>Email:</strong> {email}</p>
<p><strong>Password:</strong> {token}</p>
</div>
    )
}
export default Counter;