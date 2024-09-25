import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {
            // console.log(result)
            console.log(result.data)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return ( <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" onChange={(e) => {
                setName (e.target.value)}} />
            <hr />
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" onChange={(e) => setEmail (e.target.value)} />
            <hr />
            <label htmlFor="password" >Password</label>
            <input type="password" name="password" onChange={(e) => setPassword (e.target.value)} />
            <button type="submit" >Register</button>

            <hr />
            <p>Already have an account</p>
            <Link to="/login" >Login</Link>
        </form>
    </div> );
}
 
export default Signup;