//1.Import area
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import A from "./component/A";

//2. function definition area
function App() {
  //Every function return something
  return (
    <>
      <h1 className='heading1'>This is My Project 3rd in this project I'm going to use functional as well as Class components</h1>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <A />
  </React.StrictMode>
);
//3. Export area
