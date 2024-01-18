import React, { useState } from 'react';

const Welcome = () => {

    const [isLoggedIn, setIsLoggedIn]  = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

  return (
    <div>
        {
            isLoggedIn ? (
                <p>Welcome, User!</p>
            ) : (
                <div>
                    <p style={{marginLeft:'25px',marginTop:'25px'}}>Please log in to access the content</p>
                    <button className='counter_btn' onClick={handleLogin}>Log In</button>

                </div>
            )
        }

    </div>
  )
}

export default Welcome;