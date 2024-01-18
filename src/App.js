import logo from './logo.svg';
import './App.css';
import SearchFilter from './10ReactNodeJSPractice/BuildSearchFilter/SearchFilter';
import CounterExercise from './10ReactNodeJSPractice/SimpleCounterExercise/CounterExercise';
import Displaylist from './10ReactNodeJSPractice/DisplayList/Displaylist';
import Imageslider from './10ReactNodeJSPractice/ImageSlider/Imageslider';
import Checklist from './10ReactNodeJSPractice/Checklist/Checklist';
import Singleform from './10ReactNodeJSPractice/SimpleLogInForm/Singleform';
import Restapi from './10ReactNodeJSPractice/RestAPI/Restapi';
import Greeting from './BasicReactFunctionAndProps/Question1/Greeting';
import Counter from './BasicReactFunctionAndProps/Question2/Counter';
import Pricequntatiy from './BasicReactFunctionAndProps/Question3/Pricequntatiy';
import Todolist from './BasicReactFunctionAndProps/Question4/Todolist';
import Weather from './BasicReactFunctionAndProps/Question5/Weather';
import Welcome from './ReactConditional/Question1/Welcome';
import Dashboard from './ReactConditional/Question2/Dashboard';
import Pagination from './Component/Pagination';
import Count from './UseStateAndProps/Question1/Count';
import Form from './UseStateAndProps/Question3/Form';
import ParentComponent from './UseStateAndProps/ParentComponent/ParentComponent';
import Toggle from './UseStateAndProps/Question5/Toggle';


const App = () => {

  const todos = [
    {id:1, task:'Complete Assignment'},
    {id:2, task:'Read a book'},
    {id:3, task:'Go For A walk'}
  ];
  
  const city ="Ajmer";
  const weatherCondition = "Sunny";

  const data = ['item1','item2','item3','item4','item5','item6','item7'];
  

  return (
    <div className="App">
      {/*
      <Greeting name ="jhon"/>
  */}
  {/*
  <Counter intialCount={0}/>
*/}
{/*
<Pricequntatiy name="Laptop" price={899.99} quantity={3}/>
<Pricequntatiy name="Phone" price={499.99} quantity={5}/*/}
{/*
<Todolist todos={todos}/>
      </div>
  );
*/}
{/*
<Weather city={city} weatherCondition={weatherCondition}/>
*/}
{/*
<h2>Pagination</h2>
<Pagination data={data} itemsPerPage={2}/>
*/
}
<Toggle/>
</div>
  )
}

export default App;
