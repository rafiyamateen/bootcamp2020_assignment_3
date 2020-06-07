import React from 'react';
function Course(props){
    return(
        <div>
            <h1>{props.courseName}</h1>
            <h2>Urdu Class-{props.class}</h2>
            <h3>Assignment-{props.assignmentNum}</h3>
        </div>
    );
} 
export default Course;