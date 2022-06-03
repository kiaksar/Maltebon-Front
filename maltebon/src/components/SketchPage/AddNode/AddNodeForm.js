import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Select, { SelectChangeEvent } from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ControlledOpenSelect from "./AddNodeSelectPlugin";
import TextField from "@material-ui/core/TextField";

export const AddNodeForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    plugin: "",
    target: "",
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group" style={{ visibility: "hidden", height: "0" }}>
        <TextField
          onChange={(e) => {
            setState({ plugin: e.target.value });
          }}
          id="Plugin-basic"
          label="Plugin"
          variant="filled"
          hidden={true}
        />
      </div>
      <div className="form-group" style={{ textAlign: "center" }}>
        <TextField
          onChange={(e) => {
            setState({ target: e.target.value });
          }}
          id="Token-basic"
          label="Target"
          variant="filled"
          fullWidth
        />
      </div>
      <div className="form-group">
        <Button
          className="form-control btn btn-primary"
          type="submit"
          color="primary"
          style={{ width: "100%", borderRadius: 100 }}
        >
          Add
        </Button>
      </div>
    </form>
  );
};
export default AddNodeForm;
