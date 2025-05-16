import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({ userPromise }) => {
    const initalUser = use(userPromise);
    const [users, setUsers] = useState(initalUser);
    console.log(initalUser);


    const handleUsers = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = { name, email }
        // console.log(newUser)

        // crate user in database 
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {

                console.log('data in data base ', data)
                // datar modde insert id ache mane data successfully added 
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser]
                    setUsers(newUsers)

                    alert('data added successfully');
                    e.target.reset();
                }
            })
    }

    const handleUserDelete = (id) => {
        console.log('delete kore daw', id)
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers)
                    console.log('after delete', data)
                }
                console.log(data.deletedCount)


            })
    }
    return (
        <div>
            {/* add user  */}
            <div>
                <h1>User:{users.length}</h1>
                <form onSubmit={handleUsers}>
                    <input type="text" name="name" id="" required />
                    <br />
                    <input type="email" name="email" id="" required />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            <div>
                {
                    users.map(user =>
                        <p key={user._id}>
                            {user.name}:{user.email}
                            <Link to={`/users/${user._id}`}>Details</Link>
                            <Link to={`/update/${user._id}`}>Edit</Link>
                            <button onClick={() => handleUserDelete(user._id)}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;