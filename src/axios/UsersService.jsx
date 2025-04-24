import axios from "axios";

 export function UsersService(){
   
    var usersDetails=axios.get("https://randomuser.me/api/?results=20")
    return usersDetails;
}
export default UsersService;