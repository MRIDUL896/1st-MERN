import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        const { value, name } = e.target;
        console.log(value)
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("hii");
            const response = await axios.post('http://localhost:8000/login', user);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="username" placeholder="Username" 
                        required={true} onChange={handleChange} value={user.username} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password"
                         required={true} onChange={handleChange} value={user.password}/>
                    </div>
                    <button type="submit">login</button>
                </form>
            </div>
            <div>
                <p>Not Registered ?</p>
                <Link to='/register'>Register Here</Link>
            </div>
        </div>
    )
}

export default Login;