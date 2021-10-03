import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import {
  Checkbox,
  createSvgIcon,
  Fab,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  marginLeft: "18px",
  marginRight: "70px",
}));

const Task = () => {
  return (
    <div style={{ marginTop: "8px" }}>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <div
          style={{
            display: "flex",
            borderBottom: "1px  #d1dbeb  solid",
            justifyContent: "space-between",
            marginLeft: "18px",
            marginRight: "68px",
            padding: "4px",
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="sdsd"
            />
          </FormGroup>
          {/* <Fab color="primary" aria-label="edit"> */}
          <EditIcon color="primary" />
          {/* </Fab> */}
        </div>
      </Stack>
    </div>
  );
};

export default Task;
