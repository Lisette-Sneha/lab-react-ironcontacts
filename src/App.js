import React from 'react';
import logo from './logo.svg';
import './App.css';
import contactsFromJson from './contacts.json';

// function App() {
//   console.log(contacts)
//   return (
//     <div className="App">

//     </div>
//   );
// }

class App extends React.Component {
  state = { contacts: contactsFromJson.slice(0, 5) };

  addRandomContact = () => {
    const randomNumber = Math.floor(
      Math.random() * contactsFromJson.length - 1 + 1
    );
    const randomContact = contactsFromJson[randomNumber];

    this.state.contacts.forEach((contact) => {
      if (!this.state.contacts.includes(randomContact)) {
        this.setState({
          contacts: [randomContact, ...this.state.contacts],
        });
      } else {
        console.log('contact is already present');
      }
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div className="contacts-container">
        <h1>Iron contacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        {this.state.contacts.map((contact) => {
          return (
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tr key={contact.id}></tr>
              <td>
                <img id="photo" src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </table>
          );
        })}
      </div>
    );
  }
}

export default App;
