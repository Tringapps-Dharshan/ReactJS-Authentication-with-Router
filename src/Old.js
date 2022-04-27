import React from "react"
import { useParams } from "react-router-dom";
import Oldimg from "./Oldimg.png"
function Old(){
    const {oldcourse}=useParams();
    return(
        <div>
            <h1>Upcoming Courses {oldcourse}</h1>
            <img src={Oldimg} alt="UpcomingCourses"/>
        </div>
    )
}
export default Old;