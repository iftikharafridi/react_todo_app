import { Button, Form} from "react-bootstrap";
function TodoList({ todoList, completeTask, deleteTask }) {
  return (
    <>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {/* <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"      
                onChange={() => completeTask(index)} 
                checked = {item.isCompleted}     
                    
              />
            </Form> */}
            <input type = "checkbox" onChange={() => completeTask(index)} checked = {item.isCompleted} />{' '}
            <span style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>{item.task}</span>{' '}
            <Button variant="outline-success" onClick={() => completeTask(index)}>√</Button>{' '}
            {/* <Button variant="outline-danger" onClick={() => deleteTask(index)}>x</Button> */}
            <Button variant="outline-danger" onClick={() => deleteTask(item.id)}>x</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;