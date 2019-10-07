import React,{Component} from "react";
import Person from './TestComponents/Person.js'
import "./App.css"

class App1 extends Component {
    state={
        person:[
            {id:"1",name:"shayak"},
            {id:"sasas1",name:"sagar"}
        ],
        toggle:false,
    };
    toggleHandler = () =>{
        const i = this.state.toggle;
        this.setState({
            toggle:!i
        })
    }
    cnangename=(event,id) =>{
        const index = this.state.person.findIndex(p =>{
            return p.id === id;
        });
        const a = {
            ...this.state.person[index]
        };
        a.name=event.target.value;
        const name = [...this.state.person];
        name[index] = a;
        this.setState({person:name
        })
    }

  
    render(){

    

        let person = null;
        if(this.state.toggle){
            person = (
                <div>
                     {this.state.person.map(persons =>{
                        return(<Person name={persons.name}
                            key={persons.id}
                            click={(event)=>this.cnangename(event,persons.id)}/>
                            ) ;
                   })}
            </div>
            );
        }
       
    return(<div className="App">
        <h1>shayak</h1>
        <button onClick={this.toggleHandler}>Switch name</button>
        {person}
        
     </div>
    );
    }
}

export default App1