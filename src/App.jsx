import React from 'react'
import './App.css'
import Card from './Card.jsx'
import reactlogo from './assets/react.svg'

const Todos = [
  { task: 'Manger', date: '27/01/2025, 12:00:00', task_check: true },
  { task: 'Dormir', date: '27/01/2025, 13:00:00', task_check: true },
  { task: 'Etudier', date: '27/01/2025, 13:30:00', task_check: false },
  { task: 'Jouer', date: '27/01/2025, 17:00:00', task_check: false },
];

function Todo({ task, date, task_check }){
    if(task_check){
      return(
        <li className='green'>
        {task} - {date} <input type="checkbox" defaultChecked />
        </li>
      )
    }
  return(
    <li className='orange'>
      {task} - {date}
    </li>
  );
}

function TodoTer({ task, date, task_check }){
    return( task_check ? <li className='green'> {task} - {date} <input type="checkbox" defaultChecked /></li> : <li className='orange'> {task} - {date} </li> );
}
function TodoAnd({ task, date, task_check }){
  
    return( 
    <li className={task_check ?'green':'orange'}>
    {task} - {date} {task_check>0 && <input type="checkbox" defaultChecked />}
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
      {Todos.map((todo, index) => (
          <Todo key={index} task={todo.task} date={todo.date} task_check={todo.task_check} />
      ))}
      </ul>
      <h1>Ma ToDo List (Ternaire) :</h1>
      <h2>{currentDate}</h2>
      <ul>
      {Todos.map((todo, index) => (
          <TodoTer key={index} task={todo.task} date={todo.date} task_check={todo.task_check} />
      ))}
      </ul>
      <h1>Ma ToDo List (&&):</h1>
      <h2>{currentDate}</h2>
      <ul>
      {Todos.map((todo, index) => (
          <TodoAnd key={index} task={todo.task} date={todo.date} task_check={todo.task_check} />
      ))}
      </ul>
    </article>
  );
}

const Users = [
  { pseudo: 'Tyrfing', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet"},
  { pseudo: 'Tyrfing', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet"},
  { pseudo: 'Tyrfing', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet"},
  { pseudo: 'Tyrfing', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet"},
];

function App() {

  return (
    <>
    <section>
      <div className='mx-auto container'>
      <Article />
      </div>
      <div className='mx-auto container card-user'>
      <h1>Liste des Utilisateurs:</h1>
        <div className='card-list'>
          {Users.map((user, index) => (
            <Card
              key={index}
              pseudo={user.pseudo}
              mail={user.mail}
              image={user.image}
              description={user.description}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default App
