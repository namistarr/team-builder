import React from 'react';

function Form () {
    return (        
        <form onSubmit={event => handleSubmit(event)}>
            <fieldset>
                <legend>New Team Member</legend>
                <label>
                    Name: 
                    <input 
                        type='text'
                        name='name'
                        value={teamMember.name}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='text'
                        name='email'
                        value={teamMember.email} 
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Role:
                    <input
                        type='text'
                        name='role'
                        value={teamMember.role} 
                        onChange={event => handleChange(event)}
                    />
                </label>
                <button type='submit'>
                    Submit
                </button>
            </fieldset>
        </form>
    
    );
}