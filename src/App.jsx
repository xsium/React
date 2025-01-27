import React from 'react'
import './App.css'
//import Card from './Card.jsx'


function Todo({ task, date }){
  return (
    <li>
      {task} - {date}
    </li>
  );
}

function Article(){
  const currentDate = new Date().toLocaleString();
  return (
    <article className='todolist'>
      <h1>Ma ToDo List :</h1>
      <h2>{currentDate}</h2>
      <ul>
        <Todo task="Manger" date={currentDate} />
        <Todo task="Dormir" date={currentDate} />
        <Todo task="Jouer" date={currentDate} />
      </ul>
    </article>
  );
}

function App() {

  return (
    <>
    <section>
      <div className='mx-auto container'>
      <Article />
      </div>
    </section>
    </>
  );
}

export default App
