import React,{useState} from 'react'

const Restapi = () => {
     // Step 1: Create React state to store the API response
  const [apiData, setApiData] = useState(null);

  // Step 3: JS function where API call is made through fetch()
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
      const data = await response.json();

      // Step 4: Add callback function to update React state with API response
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
         <h2>API Example</h2>
      {apiData ? (
        <div>
          <h3>Data from API:</h3>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      {/* Step 5: Add HTML button with JS function and onChange attribute */}
      <button onClick={fetchData} className='login_btn'>Fetch Data</button>
    </div>
  )
}

export default Restapi