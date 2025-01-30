import React, {useState} from 'react'
import './App.css'
import Card from './Card.jsx'
import reactlogo from './assets/react.svg'
import Calendar from './Calendar.jsx'


//Variables-------------------------------------------
const Todos = [
  { task: 'Manger', date: '27/01/2025', task_check: true, hour: 1, category: "besoin" },
  { task: 'Dormir', date: '27/01/2025', task_check: true, hour: 3, category: "besoin" },
  { task: 'Etudier', date: '27/01/2025', task_check: false, hour: 6, category: "besoin" },
  { task: 'Jouer', date: '27/01/2025', task_check: false, hour: 4, category: "loisir" },
];

const Users = [
  { pseudo: 'Tyrfing', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "H"},
  { pseudo: 'Naali', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "F"},
  { pseudo: 'Adaly', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "non-binaire"},
  { pseudo: 'Tyr', mail: 'test@gmail.com', image: reactlogo , description: "Des chiffres et des lettres lorem ipsum dolor sit amet", sexe: "H"},
];
//----------------------------------------------------

//function Todos--------------------------------------
function Todo({ task, date, task_check, heureRestante }){
  const [heures, setHeures] = useState( heureRestante );
  function handleClick(task){alert(task);  }
  function handleClickMinus(){if(heures>0){setHeures(heures - 1)}}
  function handleClickPlus(){setHeures(heures + 1);}

    //if(task_check){
      return(
        <>
        <div className='d-flex flex-row align-items-center justify-content-between'>
          <li className={task_check ?'green':'orange'} onClick={()=>{handleClick(task)}}>
            {task} - {date} {task_check>0 && <input type="checkbox" defaultChecked />}
          </li>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <button onClick={()=>{handleClickMinus()}}> - </button>
            <p>heures restantes: {heures}</p> 
            <button onClick={()=>{handleClickPlus()}}> + </button>
          </div>
        </div>
        </>
      )
   /* }
    
  return(
    <>
    <div className='d-flex flex-row align-items-center justify-content-between'>
          <li className='orange' onClick={()=>{handleClick(task)}}>
            {task} - {date}
          </li>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <button onClick={()=>{handleClickMinus()}}> - </button>
            <p>heures restantes: {heures}</p> 
            <button onClick={()=>{handleClickPlus()}}> + </button>
          </div>
        </div>
    </>
  );
  */
}
//Variantes de Todo-----------------------------------
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
//----------------------------------------------------

//Affichage TODO--------------------------------------
function Article({children}){
  const [loisir, setLoisir] = useState( true );
  const [besoin, setBesoin] = useState( true );
  const currentDate = new Date().toLocaleString();
  function handleChangeCatLoisir(){
    setLoisir(!loisir);
    console.log(!loisir);
  }
  function handleChangeCatBesoin(){
    setBesoin(!besoin);
    console.log(!besoin);
  }

  const TODOLIST = Todos.filter(element => { 
    if( element.category == "besoin" && !besoin == true ){ return false }
    if( element.category == "loisir" && !loisir == true ){ return false }
    else return true;
  });
  console.log(TODOLIST);

  return (
    <article className='todolist'>
      <h1 className='text-center'>Ma ToDo List :</h1>
      <h2>{currentDate}</h2>
      <div className='mx-auto container'>
          <h2>Catégories</h2>
          <div className='d-flex flex-row justify-content-evenly'>
            <div>
              <label htmlFor="loisir">Loisirs:</label>
              <input className='m-1' type="checkbox" checked={loisir} name='loisir' onChange={()=>{handleChangeCatLoisir()}}/>
            </div>
            <div>
              <label htmlFor="besoin">Besoins:</label>
              <input className='m-1' type="checkbox" checked={besoin} name='besoin' onChange={()=>{handleChangeCatBesoin()}}/>
            </div>
          </div>
      </div>
      <ul>
      {TODOLIST.map((todo, index) => (
          <Todo key={index} task={todo.task} date={todo.date} task_check={todo.task_check} heureRestante={todo.hour} click={()=>handleClick()} />
      ))}
      </ul>
      {/* à décommenter pour montrer les variantes de todo du Tp todolist 1
      <h1 className='text-center'>Ma ToDo List (Ternaire) :</h1>
      <h2>{currentDate}</h2>
      <ul>
      {Todos.map((todo, index) => (
          <TodoTer key={index} task={todo.task} date={todo.date} task_check={todo.task_check} />
      ))}
      </ul>
      <h1 className='text-center'>Ma ToDo List (&&):</h1>
      <h2>{currentDate}</h2>
      <ul>
      {Todos.map((todo, index) => (
          <TodoAnd key={index} task={todo.task} date={todo.date} task_check={todo.task_check} />
      ))}
      </ul>
      */}
      {children}
    </article>
  );
}
//----------------------------------------------------

//Composant Form--------------------------------------
function Form({ onSubmit }){
  function handleChange(event){
    console.log(event.target.value);
  }

  return(
    <form action='#'onSubmit={(event) => {onSubmit(event)}}>
      <input type="text" placeholder='la todo' onChange={(event)=>{handleChange(event)}}/>
      <input type="text" placeholder='la date' onChange={(event)=>{handleChange(event)}}/>
      <input type="submit" value="Envoyer" />
    </form>
  );
}
//----------------------------------------------------

//Affichage Card--------------------------------------
function ArticleCard(){
  const [search, setSearch] = useState( "" );
  const Users_list = Users.filter(element => { 
    if( !element.pseudo.includes(search)){ return false; }
    else return true;
  });
  return(
    <>
    <input className='m-4' type="text" placeholder='Chercher un pseudo...' onChange={(event)=>{setSearch(event.target.value);}}/>
    <h1>Liste des Utilisateurs:</h1>
    <div className='card-list'>
          {Users_list.map((user, index) => (
            <Card
            key={index}
            pseudo={user.pseudo}
            mail={user.mail}
            image={user.image}
            description={user.description}
            sexe={user.sexe}
            />
          ))}
      
    </div>
    <p>Il y a {Users.length} Utilisateurs</p>
    
    </>
  );
}
//----------------------------------------------------


function App() {

  function handleSubmit(event){
    event.preventDefault();
    //console.log(event.target[0].value); //test
    const INPUTS = event.target.querySelectorAll('input[type="text"]');
    INPUTS.forEach((input) => {
      console.log(input.value);
    });
  };

  return (
    <>
    <div id='wrap'>
      <section>
      <div className='mx-auto container'>
        <Article> 
          <div className='mx-auto container'>
            <Form onSubmit={handleSubmit} />
          </div>
        </Article>
      </div>
      </section>
      <section>
      {Users.length>0 &&
      <div className='mx-auto container card-user'>
        <ArticleCard />
      </div>
      }
      </section>
      <section>
        <div className='mx-auto container'>
        <Calendar />
        </div>
      </section>
    </div>
    </>
  );
}

export default App
