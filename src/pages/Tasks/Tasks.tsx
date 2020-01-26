import React, { useState } from "react";
import { taskClass, data } from "tasks";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState(new taskClass(data));

  return (
    <>
      <div>Original Data</div>
      <div>{JSON.stringify(tasks.getData())}</div>
      <div>Processed Data</div>
      <div>{JSON.stringify(tasks.getProcessedData())}</div>
    </>
  );
};

export default Tasks;
