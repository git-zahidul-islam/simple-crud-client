import { Link, useLoaderData } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";

const Users = () => {
    const dataLoading = useLoaderData()
    const [data, setData] = useState(dataLoading)

    console.log(data);
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(fetchData => {
                console.log(fetchData);
                if (fetchData.deletedCount > 0) {
                    alert("data delete successfully")
                    const remaining = data.filter(userData => userData._id !== _id)
                    setData(remaining)
                }
            })
    }

    return (
        <div>
            <Nav></Nav>
            <h1>data length : {data.length}</h1>
            {
                data.map(aData => <p key={aData._id}>{aData.email}
                    {aData._id}
                    <Link to={`/update/${aData._id}`}>Updated</Link> 
                    <button onClick={() => handleDelete(aData._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Users;