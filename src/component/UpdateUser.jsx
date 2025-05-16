import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user =useLoaderData();
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default UpdateUser;