import { Component } from "react";
import Form from "./Form/Form"
import ListItem from "./ListItem/LisrtItem"
import Filter from "./Filter/Filter"
import shortid from "shortid";
import Section from "./Section"

class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  componentDidMount(){
    const contacts = localStorage.getItem("contacts");
    const parse = JSON.parse(contacts)
    this.setState({contacts: parse})
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts) )
  }

  dataFromForm = (data)=> {
    const {contacts} = this.state
    const {name, number} = data
    const searchSameName = contacts.map(contact => contact.name).includes(data.name)

    if(searchSameName) {
      alert(`${data.name} is already in contacts`)
    }else{
      this.setState({ contacts: [{id: shortid.generate(), name, number}, ...contacts]})}

    
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })


  }

  getFilterElem = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  handleDelete = (id) => {
    this.setState(prevState => {
      return {contacts: prevState.contacts.filter(el => el.id !== id)}
      })
  }

 

  render(){
    
    const filtered = this.getFilterElem();

    return(
      
        <>
         <Section>
         <h2>Phonebook</h2>
          <Form onChange={this.dataFromForm}/>

          <Filter onChange={this.changeFilter} value={this.state.filter}/>

          <h2>Contacts</h2>
          {this.state.contacts.length === 0? <span>Add contacts!</span>: <ListItem contacts={filtered} Delete={this.handleDelete}/>}
          
         </Section>
          
        </>
      
    )

    
  }
}
export default App;
