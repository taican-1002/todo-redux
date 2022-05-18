import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";

import { useDispatch } from "react-redux";
// import {
//   searchFilter,
//   statusFilter,
//   priorityFilter,
// } from "../../redux/actions";

import { filtersSlice } from "./FiltersSlice";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriorities, setFilterPriorities] = useState([]);

  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFilter(e.target.value));
  };

  const handleStatus = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFilter(e.target.value));
  };

  const handlePriority = (value) => {
    setFilterPriorities(value);
    dispatch(filtersSlice.actions.priorityFilter(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchText}
        />
      </Col>
      <Col span={24} sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col span={24} sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriorities}
          onChange={handlePriority}
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
      </Col>
    </Row>
  );
}
