import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div>
                <Link to={'/'}>Home</Link>
                <br />
                <Link to={'/users'} >Users</Link>
            </div>            
        </div>
    );
};

export default Nav;