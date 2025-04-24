import { useState } from "react";
import UsersService from "./UsersService";
import User from "./User";

function Users(){
let [users,setUsers]=useState([]);

const sendData=()=>{
  const userPromiseObject=UsersService();
  userPromiseObject
  .then((users)=>{
    console.log(users.data.results);
    setUsers(users.data.results);
  })
  .catch((err)=>{
    alert("Failed to get Users Data");
  });
};
console.log("USERS",users);

    return(
    <div>
      <h1>Users Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa expedita et nostrum totam tempora beatae autem, nisi eligendi eaque quaerat dignissimos incidunt doloribus provident voluptatem voluptate quisquam temporibus. Atque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, numquam! Nihil at excepturi autem nostrum ea sequi ratione veritatis ut temporibus iure unde, eum nam, optio laudantium repudiandae corporis magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sequi consequatur alias, minus soluta doloribus maxime eius nemo repellat, dicta temporibus iure perferendis modi. Vel nemo ipsa adipisci aperiam voluptate!
      </p>
      <button onClick={sendData}>Get users</button>

      <div>
        <div>
          <input type="radio" />
          <label>ALL</label>
        </div>
        <div>
          <input type="radio" />
          <label>Male</label>
        </div>
        <div>
          <input type="radio" />
          <label>Female</label>
        </div>
      </div>

      <div>
        {users.map((element,index)=>{
            return(
              <User user={element}/>
            )
          })
        }
      </div>
    </div>
    )
}
export default Users;