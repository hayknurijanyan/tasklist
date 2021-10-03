import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function InputField() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
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
        />
        <div style={{ height: "90px", marginTop: "15px" }}>
          <Stack direction="row" spacing={1}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
