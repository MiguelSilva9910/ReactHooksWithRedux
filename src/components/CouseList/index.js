import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title){
    return { type: 'ADD_COURSE', title: 'GraphQL'}
}


export default function CouseList() {
    const qta = 2;

    const courses = useSelector(
        state => state.data.slice(0, qta),
        [qta]
    );

    const dispatch = useDispatch();

    function addCourse() {
        dispatch(addCourseAction('GraphQL'));
    };

    return (
        <>
            <ul>
                { courses.map(course => 
                    <li key={course}>{course}</li>
                )}
            </ul>
            <button type='button' onClick={addCourse}>Adicionar um curso</button>
        </>
    );
}
