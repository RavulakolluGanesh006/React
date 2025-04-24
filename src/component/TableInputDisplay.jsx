function TableInputDisplay({userList,setUserList}){
   
   return(
    <div>
<table width="100%" cellPadding="10px">
<thead>
<tr>
    <th>NAME</th>
    <th>EMAIL</th>
</tr>
</thead>
<tbody>
    {
      userList.map(function(element,index){
        return(
            <tr>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td><button onClick={(index)=>{
                    
userList.splice(index,1)
setUserList([...userList]);
                    }
                }>delete</button></td>
            </tr>
        )

      })  
    }
</tbody>
</table>
</div>
    )
}
export default TableInputDisplay;