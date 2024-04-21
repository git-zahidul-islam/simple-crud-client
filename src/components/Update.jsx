import { useLoaderData } from "react-router-dom";
import Nav from "./Nav";

const Update = () => {
    const loadingUser = useLoaderData()
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email);
        const updatedUser = {name,email}

        fetch(`http://localhost:5000/users/${loadingUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert("user update successfully")
            }
        })
    }
    return (
        <div>
            <Nav></Nav>
            <h1>updated data: {loadingUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadingUser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadingUser.email} id="" />
                <br />
                <input type="submit" value="Update data" />
            </form>
        </div>
    );
};

export default Update;