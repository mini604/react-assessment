import React, { useState } from 'react';

const AdminDashboard = () =>{
    return(
        <div>
            <h2>Welcome Admin!</h2>
        </div>
    );
};

const UserDashboard = () => {
    return(
        <div>
            <h2>Welcome User!</h2>
        </div>
    )
}

const Dashboard = ({isUser}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () =>{
        setIsLoggedIn(true);
    }
  return (
    <div>
        {isLoggedIn ? (
            isUser ? (
                <AdminDashboard/>
            ) : (
                <UserDashboard/>
            )
        ):(
            <div>
                <p>Please LogIn to access the dashboard</p>
                <button onClick={handleLogin}>Log In</button>
            </div>
                )}

       
    </div>
  )
}


export default Dashboard