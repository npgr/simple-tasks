import React, { useState } from "react";
import { Button, Grid } from "semantic-ui-react";
import { taskClass, data, data2 } from "tasks";
import TaskTable from "components/Table";

const taskObj = new taskClass(data);

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState(taskObj.getData());
  const [procesedTasks, setProcesedTasks] = useState(
    taskObj.getProcessedData()
  );

  const changeData = () => {
    tasks === data ? taskObj.setData(data2) : taskObj.setData(data);
    setTasks(taskObj.getData());
    setProcesedTasks(taskObj.getProcessedData());
  };

  return (
    <>
      <Grid>
        <div>
          Original Data
          <TaskTable data={tasks} />
        </div>
        <div>
          Processed Data
          <TaskTable data={procesedTasks} />
          <Button onClick={() => changeData()}>change data</Button>
        </div>
      </Grid>
    </>
  );
};

export default Tasks;
