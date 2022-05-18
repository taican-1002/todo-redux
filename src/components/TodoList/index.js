import { Col, Row, Input, Button, Select, Tag, Modal } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";
import { todosSlice } from "./TodosSlice";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [isModalVisible, setIsModalVisible] = useState(false);
  let todoList = useSelector(todosRemainingSelector);
  // const searchText = useSelector(searchTextSelector);
  const dispatch = useDispatch();
  const handleAddBtn = () => {
    todoName &&
      dispatch(
        todosSlice.actions.addTodo({
          id: uuidv4(),
          name: todoName,
          priority: priority,
          completed: false,
        })
      );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleSetPriority = (value) => {
    setPriority(value);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddBtn();
    }
  };

  const handleDeleteAll = () => {
    dispatch(todosSlice.actions.deleteAllTodo());
    setIsModalVisible(false);
  };

  return (
    <Row
      style={{
        height: "100%",
        display: "block",
      }}
    >
      <Button
        type="primary"
        danger
        className="btn-delete-all"
        onClick={showModal}
      >
        Delete All
      </Button>
      <Modal
        title="Delete All Todo"
        visible={isModalVisible}
        onOk={handleDeleteAll}
        onCancel={handleCancel}
      >
        <p>Do you want to delete all job?</p>
      </Modal>
      <Col span={24} className="todo-list">
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoList &&
          todoList.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              name={item.name}
              priority={item.priority}
              completed={item.completed}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group className="input-add" compact>
          <Input
            value={todoName}
            onChange={handleInputChange}
            onKeyUp={handleEnter}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSetPriority}
            className="option-add"
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddBtn}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
