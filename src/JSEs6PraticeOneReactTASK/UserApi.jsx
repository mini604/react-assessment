import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';


const UserApi = () => {
    const [user,setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchUsers = useCallback(async () => {
        try{
            const response = await axios.get('https://dummyapi.online/api/users');
            const {data} = response;
            setUsers(data);
        }
        catch (error) {
            console.error('Error Fetching users:',error);
        }
    }, []);
    useEffect(() =>{
        fetchUsers();
    },
    [fetchUsers]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = user.filter(user =>
       user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) ;
  return (
    <div>
        <input
        type='text'
        placeholder='Search By name....'
        value={searchTerm}
        onChange={handleSearch}
        />
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(({ name, email, address: { city } }) => (
            <tr key={email}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{city}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserApi