import React, {useState} from 'react';

const  Checklist = () => {

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const options = ['Option 1', 'Option 2', 'Option 3','option 4'];

  return (
    <div style={{textAlign:'center'}}>
       <h2>Checklist</h2>
      <form>
        {options.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                name={option}
                checked={checkedItems[option] || false}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <div>
        <h3>Selected Options:</h3>
        
          {Object.entries(checkedItems).map(([option, isChecked]) =>
            isChecked ? <li key={option}>{option}</li> : null
          )}
       
      </div>
        
    </div>
  )
}

export default Checklist