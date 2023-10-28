import React, { useState } from "react";
import Task from "./Task";

const TasksList = (props) => {
  const tasks = props.tasks;

  return (
    <>
      {tasks.map((t, i) => (
        <Task key={i} data={t} />
      ))}
    </>
  );
};

export default TasksList;
