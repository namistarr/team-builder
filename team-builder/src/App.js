import React, { useState, useEffect } from 'react';
import Form from './components/Form.js';
import Member from './components/Member.js';
import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState([]);

  const addMember = member => setTeamMember([...teamMember, member]);  
  

  return (
    <div className="App">
      {teamMember.map(member => (
        <Member member={member}/>
      ))}
      
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
