import React from "react";
import shortid from "shortid";


const ListItem = ({contacts, Delete}) => {
    return <ul>
        {contacts.map(contact => <li key={shortid.generate()}>{`${contact.name}: ${contact.number}`} <button type="button" onClick={()=> Delete(contact.id)}>Delete</button></li>)}
    </ul>
   
}

export default ListItem;