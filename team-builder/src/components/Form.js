import React from 'react';

function Form (teamMember, handleChange, handleSubmit) {
    return (        
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Team Member</legend>
                <label>
                {' '}Name:{' '}
                    <input 
                        type='text'
                        name='name'
                        value={teamMember.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                {' '}Email:{' '}
                    <input
                        type='text'
                        name='email'
                        value={teamMember.email} 
                        onChange={handleChange}
                    />
                </label>
                <label>
                {' '}Role:{' '}
                    <input
                        type='text'
                        name='role'
                        value={teamMember.role} 
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