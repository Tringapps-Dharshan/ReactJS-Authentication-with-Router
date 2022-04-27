import { useAuth } from './Auth';
import {useNavigate} from "react-router-dom";
import React from "react"


function Form(){
    const auth = useAuth();
    const navigate = useNavigate();
    const  handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    if(username){
        auth.signin(username);
        navigate("courses");
        }
    }
    return (
            <div>
              <form onSubmit={handleSubmit}>
                <label>
                <input name="username" type="text" placeholder='Username'/>
                </label>{" "}
                <button type="submit">Login</button>
              </form>
            </div>
          );
    }
export default Form;

