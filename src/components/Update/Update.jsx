import { useLoaderData } from "react-router-dom";



const Update = () => {
    const user = useLoaderData()
    return (
        <div>
            <h1>Update user: {user.name}</h1>

            <form >
                <input type="text" name="name" id="" defaultValue={user.name} />
                <br />
                <input type="email" name="" id="" defaultValue={user.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;