import React, { useState, useEffect } from 'react';
import Form from './components/Form.js';
import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState({name: '', email: '', role: ''});

  function handleChange(event) {
    const newTeamMember = {...teamMember, [event.target.name]: event.target.value };
    console.log(
      'handleChange',
      event.target.name, 
      event.target.value,
      newTeamMember
    );
    setTeamMember(newTeamMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('team member', teamMember);
  }

  return (
    <div className="App">
      <Form teamMember={teamMember} handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
}

export default App;
