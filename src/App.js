import React,{useEffect,useState} from 'react';
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
import TodoList from './Component/TodoList';
import WeatherApp from './Component/WeatherApp';
//import Question1 from './UseStateHook/Question1';
//import Userlist from './JavaScriptES6In React/Userlist';
//import Question1 from './UseStateAndUseReducer/Question1';
//import Question2 from './UseStateAndUseReducer/Question2';
//import Question3 from './UseStateAndUseReducer/Question3';
//import Question4 from './UseStateAndUseReducer/Question4';
//import Question5 from './UseStateAndUseReducer/Question5';
//import Question6 from './UseStateAndUseReducer/Question6';
//import Question7 from './UseStateAndUseReducer/Question7';
//import Question8 from './UseStateAndUseReducer/Question8';
//import Audio from './Audio/ChamCham.mp3';
//import Question9 from './UseStateAndUseReducer/Question9';
//import Question10 from './UseStateAndUseReducer/Question10';
import UserApi from './JSEs6PraticeOneReactTASK/UserApi';
import Question1 from './JavaScriptEs6/Question1';
import Question2 from './JavaScriptEs6/Question2';
import Question3 from './JavaScriptEs6/Question3';
import Question4 from './JavaScriptEs6/Question4';
import Qusetion5 from './JavaScriptEs6/Qusetion5';
import Question6 from './JavaScriptEs6/Question6';
import Question7 from './JavaScriptEs6/Question7';
import Question8 from './JavaScriptEs6/Question8';
import Question9 from './JavaScriptEs6/Question9';
import { ADD_TASK } from './ReduxTaskManager/Action/Action';
import TaskForm from './ReduxTaskManager/TaskForm/TaskForm';
import Tasklist from './ReduxTaskManager/TaskList/Tasklist';
const App = () => {

  
  const todos = [
    {id:1, task:'Complete Assignment'},
    {id:2, task:'Read a book'},
    {id:3, task:'Go For A walk'}
  ];
  const images = [
    'https://www.kasandbox.org/programming-images/avatars/marcimus-red.png',
    'https://www.kasandbox.org/programming-images/avatars/marcimus-purple.png',
    'https://www.kasandbox.org/programming-images/avatars/marcimus-orange.png',
    'https://www.kasandbox.org/programming-images/avatars/duskpin-ultimate.png'
  ];
  
  const city ="Ajmer";
  const weatherCondition = "Sunny";

  const data = ['item1','item2','item3','item4','item5','item6','item7'];
  

  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

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
{/*
<div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
      */}
    
    {/*<Question8 audioPath={Audio}/>*/}
    
<TaskForm/>
<Tasklist/>
   
</div>
  )
}

export default App;
