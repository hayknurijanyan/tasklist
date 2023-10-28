import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function InputField(props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onAddClick = () => {
    props.addClick(value);
    setValue("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "70ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex" }}>
        <TextField
          id="outlined-textarea"
          label="Add task"
          placeholder="Whats your plan?"
          multiline
          value={value}
          onChange={handleChange}
        />
        <div style={{ height: "90px", marginTop: "15px" }}>
          <Stack direction="row" spacing={1}>
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => {
                onAddClick();
              }}
            >
              <AddIcon />
            </Fab>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
