import React from 'react';
function Course(props){
    return(
        <div>
            <h1>{props.courseName}</h1>
            <h1>Assignment-{props.assignmentNum}</h1>
        </div>
    );
} 
export default Course;