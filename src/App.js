import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

// function App() {
//   console.log(contacts)
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends React.Component{
  state = {contacts: contacts.slice(0,5)}
  render() {
    console.log(this.state.contacts)
    return (
      <div>
        {this.state.contacts.map((contact) => {
          return <table>
                  <img id="photo" src={contact.pictureUrl}/>
          <li>{contact.name}</li>
          <li>{contact.popularity}</li>
          </table>
        })}


        <button>
          add random
        </button>
      </div>
    )
  }
}

export default App;
