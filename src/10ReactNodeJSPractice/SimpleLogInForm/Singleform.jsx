import React, {useState} from 'react'

const Singleform = () => {

     // Step 2: React States to store user input values
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [loggedIn, setLoggedIn] = useState(false);
     const [error, setError] = useState('');

  const validateForm = () => {
    const correctUsername = 'Deepti Mishra';
    const correctPassword = 'deepti123';

    if (username === correctUsername && password === correctPassword) {
        setLoggedIn(true);
        setError('');
      } else {
        setLoggedIn(false);
        setError('Invalid username or password. Please try again.');
      }
    };

   // Step 4: Display "Welcome, ${name}" if login is successful, else display the error message
   const renderContent = () => {
    if (loggedIn) {
        return <h2>Welcome, {username}!</h2>;
      } else {
  return (
    <div style={{textAlign:'center',marginTop:'55px'}}>
          <h2>Login Form</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button"  className='login_btn' onClick={validateForm}>
              Log In
            </button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
  )
}
}
return <div>{renderContent()}</div>;
};

export default Singleform