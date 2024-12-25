import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1>All users:</h1>
            {
                users.map(user=> <p key={user._id}>{user.name}: {user.email}</p> )
            }
        </div>
    );
};

export default Users;