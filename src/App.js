import React ,{Component} from 'react';
import Person from "./Person/Person.js"
import './App.css';

class App extends Component {
  state = {
    person: [
      { id:"1",name:"manu",age:28 },
      { id:"2",name:"max",age:29 },
      { id:"3",name:"shayak",age:26 }, 
    ],

    showPerson: false,
  }
  
  namechangefinction=(event,id)=>{
    const index = this.state.person.findIndex(p =>{
      return p.id === id;
    });
    const a = {...this.state.person[index]};
    a.name = event.target.value;
    const name = [...this.state.person];
    name[index] = a;
    this.setState({person:name})
  }

  toggleHandler = () =>{
    const name = this.state.showPerson;
    this.setState({
      showPerson: !name,
    });

  }
  deletePersonHandler = (index) =>{
    // const person = this.state.person; //this way of copying array is not convineant 
    //const person = this.state.person.slice();//you can use this (javaScript)
    const person = [...this.state.person];
    person.splice(index,1);
    this.setState({person:person});
  }

  render(){

  const style = {
    backgroundColor:"white",
    font:"inharit",
    border:"1px solid blue",
    padding:"8px",
    cursor:"pointer"
  }; 

  let persons = null;

  if(this.state.showPerson){
    persons = (  <div>
      {this.state.person.map((persons,index) => {
        return <Person 
          click={() => this.deletePersonHandler(persons)} //for passing arguments
          name = {persons.name} 
          age = {persons.age}
          key={persons.id}
          click1={(event) => this.namechangefinction(event, persons.id)}/>
      })}
    
    </div>);
  }
  return (
    <div className="App">
      <h1> HY react app</h1>
      <p>This is really working</p>
      <button 
        style={style}
        onClick={this.toggleHandler}>Switch name</button>
      {persons}
    </div>
    
  );
  //return React.createElement("div",{className:"App"}, React.createElement("h1",null , "HY SHAYAK MALAKAR"))
}
}

export default App;
