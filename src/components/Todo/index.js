import { Row, Tag, Checkbox, Modal, Select, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleTodoStatus } from "../../redux/actions";
import { todosSlice } from "../TodoList/TodosSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, id, completed }) {
  const dispatch = useDispatch();
  const [priorityOption, setPriorityOption] = useState(priority);
  const [checked, setChecked] = useState(completed);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [edit, setEdit] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todosSlice.actions.toggleTodoStatus(id));
  };

  const handleDelete = () => {
    dispatch(todosSlice.actions.deleteTodo(id));
    setIsModalVisible(false);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleSetPriority = (value) => {
    setPriorityOption(value);
    priority = value;
    handleEdit();
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 5,
      }}
    >
      <Checkbox
        checked={checked}
        onChange={toggleCheckbox}
        style={{
          ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
        }}
      >
        {name}
      </Checkbox>
      <div className="todos-list-right">
        {/* <Tag
          color={priorityColorMapping[priority]}
          style={{
            margin: 0,
            ...(checked
              ? { opacity: 0.5, textDecoration: "line-through" }
              : {}),
          }}
        >
          {priority}
        </Tag> */}
        {edit ? (
          <Select
            defaultValue={priority}
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
        ) : (
          <Tag
            color={priorityColorMapping[priority]}
            style={{
              ...(checked
                ? { opacity: 0.5, textDecoration: "line-through" }
                : {}),
            }}
          >
            {priority}
          </Tag>
        )}
        <Tag
          className="edit-btn"
          color="green"
          style={{ marginRight: 20, ...(checked ? { opacity: 0.5 } : {}) }}
          onClick={handleEdit}
        >
          Edit
        </Tag>
        <Modal
          title="Delete Todo"
          visible={isModalVisible}
          onOk={handleDelete}
          onCancel={handleCancel}
        >
          <p>Do you want to delete this job?</p>
        </Modal>
        <CloseCircleOutlined
          style={{
            marginBottom: 5,
            ...(checked ? { opacity: 0.4 } : {}),
          }}
          onClick={showModal}
          className="close-btn"
        />
      </div>
    </Row>
  );
}
