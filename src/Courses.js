import React from "react";
import { Link, Outlet } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useAuth } from "./Auth";
function Courses(){
    const auth = useAuth();
    const navigate = useNavigate();
    function logout(){
        auth.signout();
        navigate("/")
      }
    return(
        <div>
            <h1>Welcome to Learn Code Hub</h1>
            <div className="container">
            <nav>
                <Link to="newcourse" className="links">Ongoing Courses</Link>
                <Link to="oldcourse" className="links">Upcoming Courses</Link>
                <button className="links logout" onClick={logout}>LogOut</button>
            </nav>
            </div>
            <Outlet/>
        </div>
    );
    }
    export default Courses;