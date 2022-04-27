import React from "react"
import { useParams } from "react-router-dom";
import Newimg from './Newimg.png'
function New(){
    const {newcourse}=useParams();
    return(

        <div>
            <h1>Ongoing Courses{newcourse}</h1>
            <img src={Newimg} alt="OngoingCourses"/>
        </div>
    )
}
export default New;