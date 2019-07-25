import React, { useState } from 'react';

function Form (props) {
    const [input, setInput] = useState({name: '', email: '', role: ''})

    function handleChange(event) {
      setInput({ ...input, [event.target.name]: event.target.value });
      // console.log(
      //   'handleChange',
      //   event.target.name, 
      //   event.target.value,
      // );
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      props.addMember();
    }

    return (        
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Team Member</legend>
                <label htmlFor='name'>
                Name:
                    <input 
                        type='text'
                        name='name'
                        value={input.name}                    
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='email'>
                Email:
                    <input
                        type='text'
                        name='email'
                        value={input.email} 
                        onChange={ handleChange}
                    />
                </label>
                <label htmlFor='role'>
                Role:
                    <input
                        type='text'
                        name='role'
                        value={input.role} 
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>
                    Submit
                </button>
            </fieldset>
        </form>
    
    );
}

export default Form;