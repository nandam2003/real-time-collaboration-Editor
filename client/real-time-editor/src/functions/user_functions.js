import axios from "axios";



const RegisterUser = ({name,email,password}) => {
    axios.post('http://localhost:5000/register',{name,email,password}).then(
        (response) => {
            console.log(response)
        }
    )
    
    
}

module.exports = RegisterUser({ name, email, password })