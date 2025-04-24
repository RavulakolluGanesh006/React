import { useState } from "react";
function Profile(){
    let[name,setName]=useState("");
    let[age,setAge]=useState();
const userAdd=()=>{
    setName("Nikhil");
    setAge(21);
}
    return(

    <div>
<input type="text" value="name" />

<input  type="number" value="age" />
<h1>{age}</h1>
<button onClick={userAdd}></button>
</div>
    );

}
export default Profile;