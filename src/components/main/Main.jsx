import React, { useState } from "react";
import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputField from "../inputField/inputField";
import TasksList from "../tasks/TasksList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

export default function Main() {
  const [taskGroup, setTaskGroup] = useState([
    {
      id: 1,
      group: "shoppinglist",
      title: "aaa",
      text: "Learn Node",
      checked: false,
    },
  ]);

  const onAddClick = (value) => {
    console.log(value);
    const taskGroupCopy = [...taskGroup];
    taskGroupCopy.unshift({ text: value });
    setTaskGroup(taskGroupCopy);
  };
  const [value, setValue] = React.useState(0);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  return (
    <Box
      sx={{
        // padding: 200,
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "center",
        height: "88vh",
        overflow: "scroll",
        // border: "1px dashed grey",
        // background: "red",
      }}
    >
      <TabPanel value={value} index={0}>
        <InputField
          addClick={(e) => {
            onAddClick(e);
          }}
        />
        <TasksList tasks={taskGroup} />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
  );
}
