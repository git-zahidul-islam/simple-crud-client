import { useLoaderData } from "react-router-dom";
import Nav from "./Nav";

const Users = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Nav></Nav>
            <h1>data length : {data.length}</h1>
            {
                data.map(aData => <p key={aData._id}>{aData.email}</p>)
            }
        </div>
    );
};

export default Users;