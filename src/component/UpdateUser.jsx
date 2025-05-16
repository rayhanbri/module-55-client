import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user =useLoaderData();
    // console.log(user);

    // patch hocce data just choto ekta thing change korbo 
    // put puro data jodi thake update koro na thakle create koro

    const handleUserupdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }
        console.log(updatedUser)

        
    }
    return (
        <div>
            <form onSubmit={handleUserupdate}>
                {/* value diye set korle nam ar edit kora jabe na  */}
                <input type="text" name="name" defaultValue={user.name}  />
                <br />
                <input type="email" name="email" defaultValue={user.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
            
        </div>
    );
};

export default UpdateUser;