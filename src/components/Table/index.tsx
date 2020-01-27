import React from "react";
import { Table } from "semantic-ui-react";
import taskType from "tasks/taskType.t";

interface TableProps {
  data: taskType[];
}

const TasksTable: React.FC<TableProps> = ({ data }) => {
  return (
    <Table celled style={{ width: "400px" }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Group</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((task, i) => (
          <Table.Row key={i}>
            <Table.Cell>{task.name}</Table.Cell>
            <Table.Cell>{task.group}</Table.Cell>
            <Table.Cell>{task.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TasksTable;
