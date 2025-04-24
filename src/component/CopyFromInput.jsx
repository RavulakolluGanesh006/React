import { useState } from "react";
import TableInputDisplay from "./TableInputDisplay";
function CopyFromInput(){
    let[user,setUser]=useState({name:"",email:""})
    let[userList,setUserList]=useState([])
  return(
<div>
    <input type="text" 
    placeholder="Enter your Name"  
    value={user.name} 
    onChange={(e)=>{
setUser({...user,name:e.target.value})
    }}/>
    <input type="email" 
    value={user.email}
    placeholder="Enter your Email"
     onChange={(e)=>{
        setUser({...user,email:e.target.value})
    }}/>
    <button onClick={()=>{
      console.log("User",user);
        setUserList([...userList,user]);
        console.log("userList",userList)
        setUser({
            name: "",
            email: "",
          });

    }}>save</button>
    <TableInputDisplay userList={userList} setUserList={setUserList} />
</div>
  )
    

    
}
export default CopyFromInput;