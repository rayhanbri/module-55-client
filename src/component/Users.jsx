import React from 'react';

const Users = () => {
    const handleUsers = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email}
        console.log(user)

        // crate user in database 
        fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('data in data base ' ,data)
            // datar modde insert id ache mane data successfully added 
            if(data.insertedId){
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
        </div>
    );
};

export default Users;