import React, { useState } from 'react';

function Member(props) {
    const handleEdit = event => {
        
    }


    return (
        <div>
            <h2>Name:</h2>
            <p>{props.member.name}</p>
            <h2>Email:</h2>
            <p>{props.member.email}</p>
            <h2>Role:</h2>
            <p>{props.member.role}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
}

export default Member;