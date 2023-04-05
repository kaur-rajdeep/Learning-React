import React, {useState} from 'react';
import './index.css';

function AddPersonForm(props){
    const[person, setPerson] = useState("");

    function handleSubmit(e){
        if(person!==''){
            props.handleSubmit(person);
            setPerson('');
        }
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add new Contact' onChange={e=>{
                setPerson(e.target.value);
            }} value={person}/>
            <button type="submit">Add</button>
            </form>
    );
}

function PeopleList(props){
    const arr = props.data;
    const listItems = arr.map((val, index)=><li className="list" key ={index}>{val}</li>
    );
    return <ul >{listItems}</ul>;
}

function ContactManager(props){
        const [contacts, setContacts] = useState(props.data);
        function addPerson(name){
            setContacts([...contacts,name]);
        }
    
    return (
        <div>
            <AddPersonForm handleSubmit={addPerson} />
            <PeopleList data={contacts} />
        </div>
    );
}

export default ContactManager;