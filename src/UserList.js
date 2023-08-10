function UserList({users}) {
  const renderdUsers = users.map((user)=> {
    //Aqui se crea la tabla con los nombres e email
    return (<tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>  
    )  ;
  });

  return  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
       </thead>
       <tbody>
        {renderdUsers}
       </tbody>
    </table>

}

export default UserList;