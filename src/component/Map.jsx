import { useState } from "react";

function Map(){
    const[data,setData]=useState([{name:"ganesh",city:"hyderabad"},{name:"nikhil",city:"karnataka"}])
    
    return(
        <table frame="box" rules="all">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        data.map((element,index)=>{
                             return(
                                <tr>
                                  <td> {element.name}</td> 
                                  <td> {element.city}</td>
                                </tr>
                             )
                        })
                    }
                </tr>
            </tbody>
        </table>

    )

}
export default Map;