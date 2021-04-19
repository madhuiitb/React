import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">
      <EventBind/>
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
       {/* <Greet name="Banti" heroName="Batman">
          <p>This is children props </p>
         </Greet>
       <Greet name="Chanti" heroName="Superman" >
        <button>Action</button>
         </Greet> */}
       {/* <Greet name="Choti" heroName="Wonder woman"/> */}
            
            {/* <Welcome name="Banti" heroName="Batman"/> 
           {/* <Welcome name="Chanti" heroName="Superman"/> */}
            {/* <Welcome name="Choti" heroName="Wonder woman"/> */} 

      {/* <Hello/> */}
      {/* <Greet name="Banti" heroName="Batman"></Greet>
       */}
    </div>
  );
}

export default App;
