import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData()
    const handleDeleteUser = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount<0){
                alert("user delete successfully")
            }
        })
    }
    return (
        <div>
            <h1>All users:</h1>
            {
                users.map(user=> <p key={user._id}>{user.name}: {user.email}: {user._id} <button onClick={()=>handleDeleteUser(user._id)}>X</button></p> )
            }
        </div>
    );
};

export default Users;