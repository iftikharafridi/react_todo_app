import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';

function TodoForm({addTask}) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!newTask) return;
        addTask(newTask);
        setNewTask("");
    };

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="w-70" controlId="formBasicEmail">
                <Form.Label>New Task</Form.Label>
                <Form.Control type="text" placeholder="Enter New Task" value = {newTask} onChange = {e => setNewTask(e.target.value)} />{' '} 
                         
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Task
            </Button>    
        </Form>
        </>
    );

};

export default TodoForm;