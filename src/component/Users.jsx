import React, { use, useState } from 'react';

const Users = ({userPromise}) => {
     const initalUser  = use(userPromise);
     const [users,setUsers] = useState(initalUser);
     console.log(initalUser);


    const handleUsers = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = {name,email}
        // console.log(newUser)

        // crate user in database 
        fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{

            console.log('data in data base ' ,data)
            // datar modde insert id ache mane data successfully added 
            if(data.insertedId){
                newUser._id = data.insertedId;
                const newUsers = [...users,newUser]
                setUsers(newUsers)

                alert('data added successfully');
                e.target.reset();
            }
        })
    }
    return (
        <div>
            {/* add user  */}
            <div>
                <form  onSubmit={handleUsers}>
                    <input type="text" name="name" id="" />
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            <div>
                {
                    users.map (user => <p key={user._id}>{user.name}:{user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;